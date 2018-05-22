// axios will get AJAX request
import axios from 'axios';
// redux-promise assures request process is synchronous


export const FETCH_POSTS = 'fetch_posts';
export const FETCH_POST = 'fetch_post';
export const CREATE_POST = 'create_post';
export const DELETE_POST = 'delete_post';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=ghibhuibinjuihbjnlu';


export function fetchPosts() {
	const request = axios.get( `${ROOT_URL}/posts${API_KEY}` );

	return {
		type : FETCH_POSTS,
		payload : request
	};
}


// posting submitted data via AJAX using axios
export function createPost(value, callback) {
	const request = axios.post(`${ROOT_URL}/posts/${API_KEY}`, values)
		// After post is made, call callback function which reroutes to main page
		.then( () => callback() );

	return {
		type : CREATE_POST,
		payload : request
	};
}


export function fetchPost(id) {
	const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);

	return {
		type : FETCH_POST,
		payload : request
	};
}


export function deletePost(id, callback) {
	const request = axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`)
		.then( () => callback() );

	return {
		type : DELETE_POST,
		payload : id
	};
}