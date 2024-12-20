import { API, OPTIONS } from "@/constants/api";
import { getDetailAPI } from "@/util/function";
import Detail from "@/components/Movie/Detail";

export const generateStaticParams = async () => {
  const response = await fetch(API.movie.popular, OPTIONS);
  const data = await response.json();

  return data.results.map((movie) => ({
    id: movie.id.toString(),
  }));
};

const MovieDetailPage = async ({ params }) => {
  const { id } = params;

  const detail = await getDetailAPI(API.movie.detailKr(id), OPTIONS);
  const detail_en = await getDetailAPI(API.movie.detailEn(id), OPTIONS);

  return (
    <Detail
      backdrop_path={API.movie.image + detail.backdrop_path}
      poster_path={API.movie.image + detail.poster_path}
      title={detail.title}
      release_date={detail.release_date}
      runtime={detail.runtime}
      tagline={detail.tagline || detail_en.tagline}
      genres={detail.genres}
      overview={detail.overview || detail_en.overview}
    />
  );
};

export default MovieDetailPage;
