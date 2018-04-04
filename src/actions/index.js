import * as types from '../constants/ActionTypes';

export const userRegister = (data = {
    "email": "",
    "password": ""
}) => {
    return {
        types: [types.API_REQUEST_SEND, types.USER_REGISTER, types.AUTH_DISCARD_TOKEN],
        payload: {
            request: {
                url: '/auth',
                method: 'POST',
                data
            }
        }
    };
};

export const userLogin = (data = {
    "email": "",
    "password": ""
}) => {
    return {
        types: [types.API_REQUEST_SEND, types.USER_LOGIN, types.AUTH_DISCARD_TOKEN],
        payload: {
            request: {
                url: '/auth/sign_in',
                method: 'POST',
                data
            }
        }
    };
};

export const userLogout = () => {
    return {
        types: [types.API_REQUEST_SEND, types.USER_LOGOUT, types.AUTH_DISCARD_TOKEN],
        payload: {
            request: {
                url: '/auth/sign_out',
                method: 'DELETE',
            }
        }
    };
};

export const updateUserProfile = (data = { "user": { "first_name": "Obama" } }) => {
    return {
        types: [types.API_REQUEST_SEND, types.UPDATE_USER_PROFILE, types.AUTH_DISCARD_TOKEN],
        payload: {
            request: {
                url: '/auth',
                method: 'PUT',
                data
            }
        }
    };
};

export const createBook = (data = {
    "book":
        {
            "title": "Call of the wild",
            "description": "A book of Jack London",
            "author": "Jack London"
        }
}) => {
    return {
        types: [types.API_REQUEST_SEND, types.CREATE_BOOK, types.AUTH_DISCARD_TOKEN],
        payload: {
            request: {
                url: '/books',
                method: 'POST',
                data
            }
        }
    };
};

export const getUserBookList = () => {
    return {
        types: [types.API_REQUEST_SEND, types.GET_USER_BOOK_LIST, types.AUTH_DISCARD_TOKEN],
        payload: {
            request: {
                url: '/books',
                method: 'GET',
            }
        }
    };
};

export const getBookDetail = (id) => {
    return {
        types: [types.API_REQUEST_SEND, types.GET_BOOK_DETAIL, types.AUTH_DISCARD_TOKEN],
        payload: {
            request: {
                url: `/books/${id}`,
                method: 'GET'
            }
        }
    };
};

export const updateBookDetail = (id) => {
    return {
        types: [types.API_REQUEST_SEND, types.UPDATE_BOOK_DETAIL, types.AUTH_DISCARD_TOKEN],
        payload: {
            request: {
                url: `/books/${id}`,
                method: 'PATCH'
            }
        }
    };
};

export const deleteBook = (id) => {
    return {
        types: [types.API_REQUEST_SEND, types.DELETE_BOOK, types.AUTH_DISCARD_TOKEN],
        payload: {
            request: {
                url: `/books/${id}`,
                method: 'DELETE'
            }
        }
    };
};
