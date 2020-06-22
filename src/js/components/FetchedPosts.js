import React, {Fragment} from "react"
import Post from "./Post";
import {useDispatch, useSelector} from "react-redux"; // метод позволяющий дипатчить акшины
import {fetchPosts} from "../redux/actions/actions";

export default () => {

    const dispatch = useDispatch(); //// метод позволяющий дипатчить акшины
    const posts = useSelector(state => state.allPosts.fetchedPosts);

    if (!posts.length) {
        return <button
            className="btn btn-primary"
            onClick={()=> dispatch(fetchPosts())} ///// закидываем экшн fetchPosts
        >Загрузить посты</button>
    }

    return posts.map( (post) => (
            <Post key={post.id} post={post}/>
    ))
}

// =-=-=--=-=-=-===--=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=




// // Object.assign()
// let a = {name: "Denys", age: 33};
// let b = {age: 34, job: "Front-End"};
// let d = {age: 100};
// let c = Object.assign({}, a, b, d, { age: 700});
// console.log("a : ", a);
// console.log("b : ", b);
// console.log("d : ", d);
// console.log(c);
