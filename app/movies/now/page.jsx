import PageLayout from "@/components/Layout/Page";
import { API, OPTIONS } from "@/constants/api";
import { getGenreAPI, getMovieAPI } from "@/util/function";

const Page = async () => {
  const genreList = await getGenreAPI(API.movie.genre, OPTIONS);
  const movieList = await getMovieAPI(API.movie.nowPlay, OPTIONS);
  return (
    <>
      <PageLayout
        title={"현재 상영작"}
        genreList={genreList}
        movieList={movieList}
      />
    </>
  );
};

export default Page;
