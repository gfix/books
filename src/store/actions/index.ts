import { BookActionKey } from '../../constants';
import { Book } from '../../model';
import { Dispatch } from 'react-redux';
import { API } from '../../api';

export type BookAction = AddBookAction | RemoveBookAction | FetchBooksAction | OtherBookAction;

export interface AddBookAction {
    type: BookActionKey.ADD;
    book: Book;
}

export interface RemoveBookAction {
    type: BookActionKey.REMOVE;
    book: Book;
}

export interface FetchBooksAction {
    type: BookActionKey.FETCH;
    books: Array<Book>;
}

export interface OtherBookAction {
    type: BookActionKey.OTHER;
}

export const fetchBooksAction = (books: Array<Book>): FetchBooksAction => ({ type: BookActionKey.FETCH, books });

export function fetchBooks(): Dispatch<BookAction> {
    return (dispatch: Dispatch<BookAction>) => (
        API.FIREBASE.database().ref('books/').on('value', snapshot => {
            if (snapshot) {
                const values = snapshot.val();
                const books = Object.keys(values).map(key => ({ id: key, ...values[ key ] }));

                dispatch(fetchBooksAction(books));
            }
        }));
}

export function addBook(book: Book): Dispatch<BookAction> {
    return (dispatch: Dispatch<BookAction>) => (
        API.FIREBASE.database().ref('books/').push(book)
    );
}

export function deleteBook(book: Book): Dispatch<BookAction> {
    return (dispatch: Dispatch<BookAction>) => (
        API.FIREBASE.database().ref(`books/${book.id}`).remove()
    );
}
