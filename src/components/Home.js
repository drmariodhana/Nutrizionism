import React from 'react';
import { Link } from 'react-router-dom';
import { PostPreview } from "./Post-preview";
import { posts } from "../MockPosts";

export function Home() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-8 col-md-10 mx-auto">

                    {posts.map(el => <PostPreview title={el.title} subtitle={el.subtitle} author={el.author} date={el.date} />)}

                    {/* <!-- Pager --> */}
                    <div className="clearfix">
                        <Link className="btn btn-primary float-right" to="#">Older Posts →</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}


