import axios from 'axios';

export const FETCH_LISTS = 'FETCH_LISTS';
export const ADD_NEW_LIST = 'ADD_NEW_LIST';

export function fetchLists() {
    const url = '/api/lists';
    const request = axios.get(url);

    return {
        type: FETCH_LISTS,
        payload: request
    };
}

export function addNewList(name) {
    const url = '/api/lists';
    const request = axios.post(url,{ name });

    return {
        type: ADD_NEW_LIST,
        payload: request
    };
}