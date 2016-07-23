import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router'

class ListItemDetails extends Component {

    cancelClickHandler() {

    }

    saveClickHandler() {

    }

    render() {
        let screenTitle = this.props.params.itemId ? "Item Details Screen" : "New item Screen";

        return (
            <div>
                <Link to={`/lists/${this.props.params.listId}`}>
                    &lt; List Name Here
                </Link>
                <div>
                    {screenTitle}
                </div>

                <div>
                    <input placeholder="Item Name"/>
                </div>
                <div>
                    <input placeholder="Quantity"/>
                </div>
                <div>
                    <textarea placeholder="Description"></textarea>
                </div>

                <div className="footer">
                    <a onClick={this.cancelClickHandler.bind(this)} href="#">Cancel</a>
                    &nbsp;
                    <a onClick={this.saveClickHandler.bind(this)} href="#">Save</a>
                </div>
            </div>
        )
    }
}


ListItemDetails.contextTypes = {
    router: React.PropTypes.object.isRequired
};


function mapStateToProps(state) {
    return {

        //list: state.lists
    };
}

export default connect(mapStateToProps)(ListItemDetails);