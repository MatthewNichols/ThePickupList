import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addNewList } from '../actions';

class ListEdit extends Component {
    constructor(props) {
        super(props);

        this.state = {listName: ''};
    }

    saveClickHandler(e) {
        e.preventDefault();
        console.log("saveClickHandler", this);
        this.props.addNewList(this.state.listName);
        this.context.router.push('/');
    }

    cancelClickHandler(e) {
        e.preventDefault();
        this.context.router.push('/');
    }

    render() {
        let screenTitle = this.props.params.listId ? "Edit List" : "Add new List";

        return (
            <div>
                <h3>{screenTitle}</h3>
                <input type="text"
                       placeholder="Name of List"
                       onChange={event => this.setState({listName: event.target.value})}
                />
                <div className="footer">
                    <a onClick={this.cancelClickHandler.bind(this)} href="#">Cancel</a>
                    &nbsp;
                    <a onClick={this.saveClickHandler.bind(this)} href="#">Save</a>
                </div>
            </div>
        )
    }
}

ListEdit.contextTypes = {
    router: React.PropTypes.object.isRequired
};

function mapDispatchToProps(dispatch) {
    "use strict";

    return bindActionCreators({addNewList}, dispatch);
}

export default connect(null, mapDispatchToProps)(ListEdit);