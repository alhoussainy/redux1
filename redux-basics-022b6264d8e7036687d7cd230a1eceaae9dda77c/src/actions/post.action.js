
import axios from 'axios'

export const GET_POSTS = "GET_POSTS"
export const ADD_POSTS = "ADD_POSTS"
export const EDIT_POSTS = "EDIT_POSTS"
export const DELETE_POSTS = "DELETE_POSTS"

export const getPosts = () => {
    return async (dispatch) => {
        try {
            const res = await axios.get(' http://localhost:3000/posts?_sort=id&_order=desc')
            dispatch({ type: GET_POSTS, payload: res.data })
        } catch (err) {
            return console.log(err)
        }
    }
}

export const addPosts = (data) => {
    return async (dispatch) => {
        try {
            await axios.post(' http://localhost:3000/posts', data)
            dispatch({ type: ADD_POSTS, payload: data })
        } catch (err) {
            return console.log(err)
        }
    }
}

export const deletePost = (postid) => {
    return async (dispatch) => {
        try {
            await axios.delete(' http://localhost:3000/posts/' + postid)
            dispatch({ type: DELETE_POSTS, payload: { postid } })
        } catch (err) {
            return console.log(err)
        }
    }
}

export const editPosts = (data) => {
    return async (dispatch) => {
        try {
            await axios({
                method: 'put',
                url: `http://localhost:3000/posts/${data.id}`,
                data: { ...data }
            })
            dispatch({ type: EDIT_POSTS, payload: { ...data } })
        } catch (err) {
            return console.log(err)
        }
    }
}
