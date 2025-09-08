import { Movies } from "@/db/schema/movies";
import { publicProcedure } from "../lib/orpc";
import fetchMovies from "@/db/api";
import useFetch from "@/services/useFetch";

export const MoviesRouter = {
  getAll: publicProcedure.handler(async () => {
    const data = useFetch(() => fetchMovies({ query: "" }));
    return data.data.from(Movies);
  }),
};
