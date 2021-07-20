import axios from "axios";

export const GetService = async () => {
    const response = await axios.get("https://endgame.free.beeceptor.com");
    return response.data
}