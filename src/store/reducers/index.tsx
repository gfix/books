import { BookAction } from '../actions/index';
import { BookActionKey } from '../../constants/index';
import { State } from '../../model';

export function books(state: State, action: BookAction): State {
    switch (action.type) {
        case BookActionKey.ADD:
            return { ...state, books: state.books.concat(action.book) };
        case BookActionKey.REMOVE:
            const index = state.books.indexOf(action.book);
            if (index > -1) {
                return { ...state, books: state.books.splice(index, 1) };
            }
            return state;
        case BookActionKey.FETCH:
            return { ...state, books: action.books };
        default:
            return state;
    }
}