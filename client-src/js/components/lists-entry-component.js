import React from 'react';
import { Link } from 'react-router'

export default function() {
    "use strict";

    return (
        <li>
            <Link to="/lists/list1">List 1</Link>
            <Link to="/lists/list1/edit">Edit</Link>
        </li>
    )
}