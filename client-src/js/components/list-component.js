import React, { Component } from 'react';
import { Link } from 'react-router'

export default function (props) {
    return (
        <div>
            <Link to="/">&lt; Lists</Link>
            <h3>List Title</h3>
            <ul>
                <li>
                    <Link to={`/lists/${props.params.listId}/item1`}>
                        Fake Item
                    </Link>
                </li>
            </ul>
        </div>
    )
}