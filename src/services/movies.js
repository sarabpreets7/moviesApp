import axios from "axios";

export const GetService = async () => {
    const response = await axios.get("https://movieapp.free.beeceptor.com/movies");
    console.log(response.data);
    return response.data
}