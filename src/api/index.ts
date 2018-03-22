const API = {
    BOOKS_URL: 'http://localhost:8080/books/'
};

const get = (url: string): Promise<Response> => {
    return fetch(url);
};

const post = (url: string, body: object): Promise<Response> => {
    return fetch(url, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(body)
    });
};

const del = (url: string): Promise<Response> => {
    return fetch(url, {
        method: 'DELETE'
    });
};

export { API, get, post, del };