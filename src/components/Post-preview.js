import React from 'react';
import { Link } from "react-router-dom";
export function PostPreview(props) {
    return (<>
        <div className="post-preview">
            <Link to="post/a">
                <h2 className="post-title">{props.title} </h2>
                <h3 className="post-subtitle"> {props.subtitle} </h3>
            </Link>
            <p className="post-meta">Posted by <Link to="#"> {props.author}  </Link>{props.date} </p>
        </div>

    </>);
}

// export default PostPreview;
