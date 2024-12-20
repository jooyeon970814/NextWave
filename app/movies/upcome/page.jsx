import PageLayout from "@/components/Layout/Page";
import { API, OPTIONS } from "@/constants/api";
import { getGenreAPI, getMovieAPI } from "@/util/function";

const Page = async () => {
  const genreList = await getGenreAPI(API.movie.genre, OPTIONS);
  const movieList = await getMovieAPI(API.movie.upcome, OPTIONS);

  return (
    <>
      <PageLayout
        title={"개봉예정작"}
        genreList={genreList}
        movieList={movieList}
      />
    </>
  );
};

export default Page;
