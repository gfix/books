import * as React from 'react';
import { Container, Header, Segment } from 'semantic-ui-react';
import Books from './containers/books/Books';

const App: React.SFC = () => {
    return (
        <>
            <Segment textAlign="center" vertical={true} inverted={true} style={{ minHeight: 200, padding: '1em 0em' }}>
                <Container text={true}>
                    <Header as="h1" inverted={true} content="Books" style={{ fontSize: '4em', marginTop: '0.5em' }} />
                    <Header as="h2" inverted={true} content="Some info here" style={{ fontSize: '1em', marginTop: '0.5em' }} />
                </Container>
            </Segment>
            <Container style={{ marginTop: '1em' }}>
                <Books />
            </Container>
        </>
    );
};

export default App;
