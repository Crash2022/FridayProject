import axios from "axios";

const instance = axios.create({
    baseURL: '',
    withCredentials: true
})

export const fridayAPI = {
    getData() {
        return (
            instance
                .get('', {})
            //.then(response => response.data)
        )
    }
}