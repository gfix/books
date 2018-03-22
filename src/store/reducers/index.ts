import { BookAction } from '../actions';
import { BookActionKey } from '../../constants';
import { State } from '../../model';

export function books(state: State, action: BookAction): State {
    switch (action.type) {
        case BookActionKey.ADD:
            return { ...state, books: state.books.concat(action.book) };
        case BookActionKey.DELETE:
            const index = state.books.findIndex(book => book.id === action.id);
            if (index > -1) {
                return { ...state, books: [ ...state.books.slice(0, index), ...state.books.slice(index + 1) ] };
            }
            return state;
        case BookActionKey.FETCH:
            return { ...state, books: action.books };
        default:
            return state;
    }
}