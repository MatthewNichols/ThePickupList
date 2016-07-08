import React, { Component } from 'react';
import { Link } from 'react-router'

export default function (props) {
    console.log('List', props);
    return (
        <div>
            <h3>List 1</h3>
            <ul>
                <li>
                    <Link to="/lists/list1/item1">
                        Item 1
                    </Link>
                </li>
            </ul>
        </div>
    )
}