import queryString from "query-string";
import { useLocation, useNavigate } from "react-router-dom";
import { HeroCard } from "../components/HeroCard";
import { getHeroByName } from "../helpers/getHeroByName";
import { useForm } from "../hooks/useForm";

export const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { q = "" } = queryString.parse(location.search);
  const heroesFilter = getHeroByName(q);

  const { searchText, onInputChange, onResetForm } = useForm({
    searchText: "",
  });
  const onHeroSearch = (e) => {
    e.preventDefault();
    // if (searchText.trim().length <= 1) return;
    navigate(`?q=${searchText.toLowerCase().trim()}`);
    onResetForm();
  };

  return (
    <>
      <div className="d-flex justify-content-center mt-5">
        <form className="d-flex" role="search" onSubmit={onHeroSearch}>
          <input
            autoComplete="off"
            className="form-control me-2"
            type="search"
            name="searchText"
            value={searchText}
            onChange={onInputChange}
            placeholder="Search a hero"
            aria-label="Search"
          />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
      </div>
      {q === "" ? (
        <div className="mt-5 alert alert-dark">search a hero</div>
      ) : (
        heroesFilter.length === 0 && (
          <div className="mt-5 alert alert-danger">
            no hero with <b> {q} </b>
          </div>
        )
      )}

      <div className="d-flex flex-wrap gap-2 justify-content-center mt-5">
        {heroesFilter.map((hero) => (
          <HeroCard key={hero.id} {...hero} />
        ))}
      </div>
    </>
  );
};
