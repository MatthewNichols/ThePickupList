import React from 'react';
import { Link } from 'react-router'

export default function(props) {
    "use strict";
    
    return (
        <li>
            <Link to={`/lists/${props.list._id}`}>{props.list.name}</Link>
            &nbsp;
            <Link to={`/lists/${props.list._id}/edit`}>Edit</Link>
        </li>
    )
}