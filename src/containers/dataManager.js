import { GetService } from "../services/movies";

export const MoviesData = async() => {
    const res = await GetService()
    return res;
}