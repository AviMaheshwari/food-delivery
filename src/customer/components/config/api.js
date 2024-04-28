import { Axios } from "axios"
export const API_URL="http://localhost:5454"


export const api=Axios.create({

    baseURL:API_URL,
    headers:{
        "Content-Type":"application/json",
    }
})