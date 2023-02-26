import { useNavigate } from "react-router-dom";
import { HeroCaracts } from "./HeroCaracts";

export const HeroCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters,
}) => {
  const heroUrl = `/HeroesApp/src/assets/heroes/${id}.jpg`;
  const navigate = useNavigate();
  const onHero = () => {
    navigate(`/hero/${id}`);
  };
  return (
    <div className="card-width card g-1 " style={{ maxWidth: "540px" }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img
            style={{ height: "100%", objectFit: "cover" }}
            src={heroUrl}
            className="img-fluid rounded-start"
            alt={superhero}
          />
        </div>
        <div className="col-md-8 d-flex flex-column  ">
          <div className="card-body ">
            <h3>{superhero}</h3>
            <hr />
            <HeroCaracts
              publisher={publisher}
              alter_ego={alter_ego}
              first_appearance={first_appearance}
              characters={characters}
            />
          </div>
          <button onClick={onHero} className="btn btn-dark m-3">
            Ver mas
          </button>
        </div>
      </div>
    </div>
  );
};
