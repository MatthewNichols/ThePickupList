import React from 'react';
import { Link } from 'react-router'

export default function(props) {
    "use strict";
    console.log(props);
    return (
        <li>
            <Link to={`/lists/${props.list._id}`}>{props.list.name}</Link>
            <Link to={`/lists/${props.list._id}/edit`}>Edit</Link>
        </li>
    )
}