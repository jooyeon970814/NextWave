import { API, OPTIONS } from "@/constants/api";
import SelectBox from "@/components/Card/Select";
import { getGenreAPI } from "@/util/function";

const Select = async () => {
  return (
    <>
      <SelectBox list={await getGenreAPI(API.movie.genre, OPTIONS)} />
    </>
  );
};

export default Select;
