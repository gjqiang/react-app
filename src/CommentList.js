/**
 * Created by gjqiang on 2017/5/18.
 */
import React, { Component } from 'react';
import Comment from './Comment';

class CommentList extends Component {
    render() {

        // 单个的渲染方法
        // return (
        //     <div className="commentList">
        //         Hello, world! I am a CommentList.
        //         {/*不知道为什么这里的children属性没有被渲染我凑*/}
        //         {/*这里的author是传到子组件的，子组件引用这个属性是this.props.author，所以这里的this.props.data是父组件传过来的*/}
        //         <Comment author={this.props.data[0].author} txt={this.props.data[0].text}>This is one comment</Comment>
        //         <Comment author={this.props.data[1].author} txt={this.props.data[1].text}>This is one comment</Comment>
        //
        //     </div>
        // );

        // 多个渲染方法
        // 箭头函数写法
        let commentNodes = this.props.data.map(comment => (
            <Comment author={comment.author} key={comment.id} txt={comment.text}>
                {comment.text}
            </Comment>
        ));
        // 相当于
        // let commentNodes = this.props.data.map(function (comment) {
        //     return (
        //         <Comment author={comment.author} key={comment.id} txt={comment.text}>
        //             {comment.text}
        //         </Comment>
        //     )
        // });

        return (
            <div className="commentList">
                {commentNodes}
            </div>
        );
    }
}

export default  CommentList;