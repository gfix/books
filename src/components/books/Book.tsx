import * as React from 'react';
import { Book } from '../../model/';
import { Card, GridColumn, Image } from 'semantic-ui-react';

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
        <GridColumn key={props.book.id}>
            <Card>
                <Image src="img/cover.png" />
                <Card.Content>
                    <Card.Header content={`${props.book.title}`} />
                    <Card.Meta>{props.book.author.name}</Card.Meta>
                    <Card.Description>Info about the book here</Card.Description>
                </Card.Content>
                <Card.Content extra={true}>
                    <a href="#" role="button" onClick={(event) => handleDeleteBook(event)}>
                        <i className="fa fa-trash" aria-hidden={true} />
                    </a>
                </Card.Content>
            </Card>
        </GridColumn>
    );
};

export { Book };
