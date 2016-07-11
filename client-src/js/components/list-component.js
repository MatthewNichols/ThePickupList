import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router'

class List extends Component {

    render() {
        return (
            <div>
                <Link to="/">&lt; Lists</Link>
                <h3>List Title</h3>
                <ul>
                    <li>
                        <Link to={`/lists/${this.props.params.listId}/item1`}>
                            Fake Item
                        </Link>
                    </li>
                </ul>
                
                <div className="footer">
                    <Link to={`/lists/${this.props.params.listId}/add-item`}>
                        Add Item to List
                    </Link>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { lists: state.lists };
}

export default connect(mapStateToProps, null)(List);