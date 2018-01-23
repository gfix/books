import * as React from 'react';
import { Book } from '../../model';
import 'font-awesome/css/font-awesome.css';

export interface Props {
    books: Array<Book>;
    addBook: (book: Book) => void;
    deleteBook: (id: string) => void;
}

class Books extends React.Component<Props> {

    handleDeleteBook = (event: React.SyntheticEvent<HTMLAnchorElement>, id: string): void => {
        event.preventDefault();
        this.props.deleteBook(id);
    }

    handleAddBook = (event: React.SyntheticEvent<HTMLAnchorElement>): void => {
        event.preventDefault();
        this.props.addBook({ title: 'Lol', author: { firstName: 'First', lastName: 'Last' } } as Book);
    }

    render() {
        return (
            <div className="row">
                <h2 className="col-md-10">New Books</h2>
                <a className="col-md-2 d-flex justify-content-md-end" href="#" onClick={this.handleAddBook}>Add book</a>
                {this.props.books.map(book =>
                    <div key={book.id} className="col-md-4">
                        <h3>{book.title}</h3>
                        <p>
                            Written by {book.author.firstName} {book.author.lastName}. Some information would be nice here. Perhaps the cover photo...
                        </p>
                        <p>
                            <a className="btn btn-danger btn-secondary" href="#" role="button" onClick={(event) => this.handleDeleteBook(event, book.id)}>
                                Delete <i className="fa fa-trash" aria-hidden={true} />
                            </a>
                        </p>
                    </div>
                )}
            </div>
        );
    }
}

export default Books;
