import Books from '../../components/books/Books';
import * as Actions from '../../store/actions';
import { Book, State } from '../../model';
import { connect, Dispatch } from 'react-redux';
import * as React from 'react';
import { compose } from 'redux';

export interface StateFromProps {
    books: Array<Book>;
}

export interface DispatchFromProps {
    addBook: (book: Book) => void;
    deleteBook: (id: string) => void;
    fetchBooks: () => void;
}

class BooksContainer extends React.Component<StateFromProps & DispatchFromProps> {
    componentDidMount() {
        this.props.fetchBooks();
    }

    render() {
        return (<Books books={this.props.books} addBook={this.props.addBook} deleteBook={this.props.deleteBook} />);
    }
}

const mapStateToProps = (state: State) => ({
    books: state.books
});

const mapDispatchToProps = (dispatch: Dispatch<Actions.BookAction>) => ({
    addBook: (book: Partial<Book>) => dispatch(Actions.addBook(book)),
    deleteBook: (id: string) => dispatch(Actions.deleteBook(id)),
    fetchBooks: () => dispatch(Actions.fetchBooks())
});

const enhance = compose(
    connect<StateFromProps, DispatchFromProps, void>(mapStateToProps, mapDispatchToProps)
);

export default enhance(BooksContainer);