export interface State {
    books: Array<Book>;
}

export interface Book {
    id: string;
    title: string;
    author: Author;
}

export interface Author {
    id: string;
    name: string;
}
