const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

function HrMovieCard({ movie }) {
  return (
    <section className="hover:scale-110 transition-all duration-150 ease-in w-[300px] ">
      <img
        src={IMAGE_BASE_URL + movie.backdrop_path}
        className="w-[150px]  md:w-[300px] rounded-lg
    hover:border-[3px] border-gray-400 cursor-pointer
    "
      />
      <h2
        className="w-[110px] md:w-[260px] text-white text-center
    mt-2  md:text-[14px] text-[10px]"
      >
        {movie.title}
      </h2>
    </section>
  );
}

export default HrMovieCard;
