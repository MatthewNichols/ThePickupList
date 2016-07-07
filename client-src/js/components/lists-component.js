import React, { Component } from 'react';
import { connect } from 'react-redux';

import ListsEntry from './lists-entry-component';
import { fetchLists } from '../actions';

class Lists extends Component {
    componentWillMount() {
        this.props.fetchLists();
    }

    renderLists() {
       const lists = this.props.lists;
        if (lists == null) return;

        console.log(lists);
        return lists.map((list) => (
            <ListsEntry/>
        ));
    }

    render() {
        return (
            <ul>
                { this.renderLists() }
            </ul>
        );
    }
}


function mapStateToProps(state) {
    console.log(state);
    return { lists: state.lists };
}

export default connect(mapStateToProps, { fetchLists })(Lists);