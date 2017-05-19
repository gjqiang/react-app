/**
 * Created by gjqiang on 2017/5/18.
 */

import React,{ Component } from 'react';

class Comment extends Component {
    render() {
        return (
            <div className="comment">
                <h2 className="commentAuthor">
                    {this.props.author}
                </h2>
                {this.props.txt}
            </div>
        );
    }
}

export default Comment;