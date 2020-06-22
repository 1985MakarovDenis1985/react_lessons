import React, {Fragment} from "react"
import {connect} from "react-redux"
import Post from "./Post";


// mapStateToProps - получение глобальното стейта и установки пропсов на основе него
const mapStateToProps = (state) => {
    // console.log(state)
    return {
        syncPost: state.allPosts.posts
    }
};

// syncPost -
const Posts = ({syncPost}) => {
    if (!syncPost.length) {
        return <p>Постов пока нет</p>
    }

    return syncPost.map((el) => (
            <Post key={el.id} post={el}/>
    ))
};
export default connect(mapStateToProps)(Posts)