import axios from 'axios';

export const FETCH_LISTS = 'FETCH_LISTS';

export function fetchLists() {
    const url = '/api/lists';
    const request = axios.get(url);

    return {
        type: FETCH_LISTS,
        payload: request
    };
}