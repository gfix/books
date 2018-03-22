import * as React from 'react';
import { Book } from '../../model/';

interface Props {
    book: Book;
    deleteBook: (id: string) => void;
}

const Book: React.SFC<Props> = (props: Props) => {

    const handleDeleteBook = (event: React.SyntheticEvent<HTMLElement>): void => {
        event.preventDefault();
        props.deleteBook(props.book.id);
    };

    return (
        <div className="col-md-4">
            <h3>{props.book.title}</h3>
            <p>
                Written by {props.book.author.name}. Some information would be nice here. Perhaps the cover photo...
            </p>
            <p>
                <a className="btn btn-danger btn-secondary" href="#" role="button" onClick={(event) => handleDeleteBook(event)}>
                    Delete <i className="fa fa-trash" aria-hidden={true} />
                </a>
            </p>
        </div>
    );
};

export { Book };
