import { BookActionKey } from '../../constants';
import { Book } from '../../model';
import { Dispatch } from 'react-redux';
import { Action } from 'redux';
import { API, del, get, post } from '../../api';

export type BookAction = AddBookAction | DeleteBookAction | FetchBooksAction | OtherBookAction;

export interface AddBookAction extends Action {
    type: BookActionKey.ADD;
    book: Book;
}

export interface DeleteBookAction extends Action {
    type: BookActionKey.DELETE;
    id: string;
}

export interface FetchBooksAction extends Action {
    type: BookActionKey.FETCH;
    books: Array<Book>;
}

export interface OtherBookAction extends Action {
    type: BookActionKey.OTHER;
}

const fetchBooksAction = (books: Array<Book>): FetchBooksAction => ({ type: BookActionKey.FETCH, books });
const addBookAction = (book: Book): AddBookAction => ({ type: BookActionKey.ADD, book });
const deleteBookAction = (id: string): DeleteBookAction => ({ type: BookActionKey.DELETE, id });

export function fetchBooks(): Dispatch<BookAction> {
    return (dispatch: Dispatch<BookAction>) => { // TODO: Loading stuff and error handling
        get(API.BOOKS_URL)
            .then(response => response.json())
            .then((books: Array<Book>) => dispatch(fetchBooksAction(books)));
    };
}

export function addBook(book: Partial<Book>): Dispatch<BookAction> {
    return (dispatch: Dispatch<BookAction>) => {
        post(API.BOOKS_URL, book)
            .then(response => response.json())
            .then((savedBook: Book) => {
                dispatch(addBookAction(savedBook));
            });
    };
}

export function deleteBook(id: string): Dispatch<BookAction> {
    return (dispatch: Dispatch<BookAction>) => {
        del(API.BOOKS_URL + id).then(() => dispatch(deleteBookAction(id)));
    };
}
