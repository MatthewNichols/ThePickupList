import React, { Component } from 'react';

import ListsEntry from './lists-entry-component';

export default class Lists extends Component {
    render() {
        return (
            <ul>
                <ListsEntry/>
                <ListsEntry/>
            </ul>
        );
    }
}