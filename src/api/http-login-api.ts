import axios from "axios";

const urlProduction = "http://143.198.84.196:8080/api";
const urlLocal = "http://localhost:8080/api";

export default axios.create({
    baseURL: urlLocal,
    headers: {
        "Content-type": "application/json"
    }
});
