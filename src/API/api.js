import axios from "axios"
axios.defaults.baseURL = "https://jsonplaceholder.typicode.com"; // Enter url 

// This is Father
export function GetPost() {
    return axios.get('/posts') // 
}

// And It's child function of Parent
export function GetPostData(num) {
    return axios.get(`/posts/${num}`) // get id and perticular card response data
}
