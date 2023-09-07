import axios from "axios";

const baseUrl = "https://jsonplaceholder.typicode.com"

export async function getPosts(){
    return await axios.get(`${baseUrl}/posts`)
}

export async function getComments(postId){
    return await axios.get(`${baseUrl}/posts/${postId}/comments`)
}

export async function getUser(userId){
    return await axios.get(`${baseUrl}/users/${userId}`)
}