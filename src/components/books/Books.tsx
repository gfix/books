import * as React from 'react';
import { Book as IBook } from '../../model';
import 'font-awesome/css/font-awesome.css';
import { Book } from './Book';
import { Button, Grid, Icon } from 'semantic-ui-react';

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
        <>
            <Button animated="vertical" onClick={handleAddBook} style={{ marginBottom: '0.5em' }}>
                <Button.Content hidden={true}>Add</Button.Content>
                <Button.Content visible={true}><Icon name="plus" /></Button.Content>
            </Button>
            <Grid columns={4} centered={false} doubling={true}>
                {props.books.map(book => <Book key={book.id} book={book} deleteBook={props.deleteBook} />)}
            </Grid>
        </>
    );
};

export default Books;
