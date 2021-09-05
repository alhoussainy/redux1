import { ADD_POSTS, DELETE_POSTS, EDIT_POSTS, GET_POSTS } from "../actions/post.action";

const initialState = {};

export default function postReducer(state = initialState, action) {

    switch (action.type) {
        case GET_POSTS:
            return action.payload
        case ADD_POSTS:
            return [...state, action.payload]
        case EDIT_POSTS:
            return state.map((post) => {
                if (post.id === action.payload.id) {
                    return {
                        ...post,
                        content: action.payload.content,
                    }
                } else return post
            })
        case DELETE_POSTS:
            return state.filter((post) => post.id !== action.payload.postid)
        default:
            return state;
    }
}