import * as React from 'react';
import { Book as IBook } from '../../model';
import 'font-awesome/css/font-awesome.css';
import { Book } from './Book';

interface Props {
    books: Array<IBook>;
    addBook: (book: IBook) => void;
    deleteBook: (id: string) => void;
}

const Books: React.SFC<Props> = (props: Props) => {

    const handleAddBook = (event: React.SyntheticEvent<HTMLElement>): void => {
        event.preventDefault();
        props.addBook({ title: 'Lol', author: { name: 'First Last' } } as IBook);
    };

    return (
        <div className="row">
            <h2 className="col-md-10">New Books</h2>
            <a className="col-md-2 d-flex justify-content-md-end" href="#" onClick={handleAddBook}>Add book</a>
            {props.books.map(book => <Book key={book.id} book={book} deleteBook={props.deleteBook} />)}
        </div>
    );
};

export default Books;
