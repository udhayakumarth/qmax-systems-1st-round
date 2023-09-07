import axios from "axios";
import {baseUrl} from "./config";

export async function getPosts(token){
    return await axios.get(`${baseUrl}/posts`)
}

export async function getComments(postId){
    return await axios.get(`${baseUrl}/posts/${postId}/comments`)
}

export async function getUser(userId){
    return await axios.get(`${baseUrl}/users/${userId}`)
}