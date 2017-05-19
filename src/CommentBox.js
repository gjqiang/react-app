/**
 * Created by gjqiang on 2017/5/18.
 */

import React, { Component } from 'react';
import CommentList from "./CommentList";
import CommentForm from "./CommentForm";
// 引入jquery是因为要用ajax而已。。。
import $ from "../node_modules/jquery/dist/jquery.min";

// 不是很懂前面那个大写react是干嘛的

class CommentBox extends Component {

    // 这种是以前的State声明方法
    // getInitialState() {
    //     return {
    //         data : []
    //     }
    // }
    // 这种是ES6
    // 其实这个constructor是es6对象的新用法，这里意思是继承了父类的属性props
    // 由于是用ES6 class语法创建组件，其内部只允许定义方法，而不能定义属性，class的属性只能定义在class之外。所以propTypes要写在组件外部。
    // 对于之前的getDefaultProps方法，由于props不可变，所以现在被定义为一个属性，和propTypes一样，要定义在class外部,这个两个东东相当于vue里面的组件如果没有收到父组件传来props的时候属性的默认值和属性类型啊。。。。
    constructor(props) {
        super(props);
        this.state = { data: [] };
    }
    // 这个api是组件渲染时执行的方法，根据字面意思理解也是这样。
    componentDidMount() {
        this.loadCommentsFromServer();
        // 轮询加载数据从而看this.state的动态改变
        // 这里要bind(this),不然会报错this underfined
        setInterval(this.loadCommentsFromServer.bind(this), this.props.pollInterval);
    }

    // 把ajax封装在一个函数里
    loadCommentsFromServer() {
        // console.log(this)
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            cache: false,
            success: function(data) {
                this.setState({data: data});
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    }

    render() {
        //这里注意了 return是括号不是花括号;
        return (
            <div className="commentBox">
                <h1>Comments</h1>
                {/*props 是不可变的：它们从父级传来并被父级“拥有”。为了实现交互，我们给组件引进了可变的 state。*/}
                <CommentList data={this.state.data}/>
                <CommentForm />
            </div>
        );
    }
}

export default CommentBox;