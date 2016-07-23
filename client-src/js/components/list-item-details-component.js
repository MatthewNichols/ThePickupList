import React, { Component } from 'react';
import { Link } from 'react-router'

export default function (props) {

    let screenTitle = props.params.itemId ? "Item Details Screen" : "New item Screen";


    return (
        <div>
            <Link to={`/lists/${props.params.listId}`}>
                &lt; List Name Here
            </Link>
            <div>
                {screenTitle}
            </div>
        </div>
    )
}