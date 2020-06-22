
// комбинирование всех редьюсеров в один
import {combineReducers} from "redux";
// -------------------------------------
import postsReducer from "./postsReducer";
import newsReducer from "./newsReducer";
import countReducer from "./countReducer";

export const rootReducer = combineReducers({
    allPosts: postsReducer,
    news: newsReducer,
    count: countReducer
});
export default rootReducer
