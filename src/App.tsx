import * as React from 'react';
import Books from './containers/books/Books';
import { BrowserRouter } from 'react-router-dom';

const App: React.SFC = () => {
    return (
        <BrowserRouter>
            <div>
                <div className="jumbotron">
                    <div className="container">
                        <h1 className="display-3">Books</h1>
                        <p>Some information on what to do would be nice here!</p>
                    </div>
                </div>
                <div className="container">
                    <Books />
                    <hr />
                    <footer>
                        <p>© Company 2017</p>
                    </footer>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;
