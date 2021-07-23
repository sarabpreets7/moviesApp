import axios from "axios";

export const GetService = async () => {
    const response = await axios.get("https://apimovie.free.beeceptor.com/");
    return response.data
}