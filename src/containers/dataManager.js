import { GetService } from "../../src/services/movies"

export const MoviesData = async() => {
    const res = await GetService()
    // console.log(res);
    return res;
}