import React, { Component } from 'react';
import { Link } from 'react-router'

export default function (props) {
    return (
        <div>
            <Link to={`/lists/${props.params.listId}`}>
                &lt; List Name Here
            </Link>
            <div>
                Item Details Here
            </div>
        </div>
    )
}