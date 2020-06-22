import {CREATE_POST, FETCH_POST} from "../types"


const initialState = {
    posts: [],
    fetchedPosts: []
};

// первым параметром - state, вторым actions
const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_POST:
        return {...state, posts: state.posts.concat([action.payLoad])}; // через ...spread дабы избежать иммутабельности
        // ---------------- можно так: ---------------
        //     return Object.assign({}, state, {
        //         posts: state.posts.concat([action.payLoad])
        //     });
        // ---------------- можно так: ---------------
        //      return {...state, posts: [...state.posts, action.payLoad]}
        case FETCH_POST:
            return {...state, fetchedPosts: action.payLoad};
        default:
            return state
    }

};
export default postsReducer


