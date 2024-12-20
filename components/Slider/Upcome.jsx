import { getMovieAPI } from "@/util/function";
import CardSwiper from "@/components/Slider/Card";
import { API, OPTIONS } from "@/constants/api";
import SliderTitle from "@/components/Slider/SliderTitle";

const Upcome = async () => {
  return (
    <section>
      <SliderTitle title={"개봉예정작"} link={`/movies/upcome`} />
      <CardSwiper list={await getMovieAPI(API.movie.upcome, OPTIONS)} />
    </section>
  );
};

export default Upcome;
