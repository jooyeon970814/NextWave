import { API, OPTIONS } from "@/constants/api";
import MainSwiper from "@/components/Slider/MainSwiper";
import { getMovieAPI } from "@/util/function";

const Main = async () => {
  return (
    <>
      <MainSwiper list={await getMovieAPI(API.movie.popular, OPTIONS)} />
    </>
  );
};

export default Main;
