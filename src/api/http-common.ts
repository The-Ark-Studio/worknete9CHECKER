import axios from "axios";

let access_token = localStorage.getItem("access_token");

export default axios.create({
    baseURL: "http://localhost:8080/api",
    headers: {
        "Content-type": "application/json",
        "Authorization": "Bearer " + access_token
    }
});