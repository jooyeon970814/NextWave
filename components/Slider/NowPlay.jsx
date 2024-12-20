import { getMovieAPI } from "@/util/function";
import CardSwiper from "@/components/Slider/Card";
import { API, OPTIONS } from "@/constants/api";
import SliderTitle from "@/components/Slider/SliderTitle";

const NowPlay = async () => {
  return (
    <section>
      <SliderTitle title={"현재상영작"} link={`/movies/now`} />
      <CardSwiper list={await getMovieAPI(API.movie.nowPlay, OPTIONS)} />
    </section>
  );
};

export default NowPlay;
