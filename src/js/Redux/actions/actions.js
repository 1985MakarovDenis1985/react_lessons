import {CREATE_POST, COUNT, FETCH_POST} from "../types";

function createPost(post) {
    return {
        type: CREATE_POST,
        payLoad: post
    }
}
function fetchPosts() {
    return async (dispatch) => {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
        const json = await response.json();
        dispatch({
            type: FETCH_POST,
            payLoad: json
        })
    }
}




//--------- Counter --------
function counterC(num) {
    return {
        type: COUNT,
        payLoad: num
    }
}
//--------------------------

export {createPost, counterC, fetchPosts}
