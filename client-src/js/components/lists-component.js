import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router'

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
            <ListsEntry list={list} key={list._id}/>
        ));
    }

    render() {
        return (
            <div>
                <ul>
                    { this.renderLists() }
                </ul>

                <div className="footer">
                    <Link to="/lists/add">Add List</Link>
                </div>
            </div>
        );
    }
}


function mapStateToProps(state) {
    console.log(state);
    return { lists: state.lists };
}

export default connect(mapStateToProps, { fetchLists })(Lists);