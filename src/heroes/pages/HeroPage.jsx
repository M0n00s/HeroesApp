import React, { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { HeroCaracts } from "../components/HeroCaracts";
import { getHeroById } from "../helpers";

export const HeroPage = () => {
  const { heroId } = useParams();
  const navigate = useNavigate();
  const hero = useMemo(() => getHeroById(heroId), [heroId]);
  if (!hero) {
    return <Navigate to="/marvel" />;
  }

  const onGoBack = () => {
    navigate(-1);
  };

  return (
    <>
      <div className="row mt-5">
        <div className="col-4 d-flex justify-content-center">
          <img
            src={`https://res.cloudinary.com/dksz8cxlh/image/upload/v1679678667/hero/${heroId}.jpg`}
            alt={hero.superhero}
            className="img-thumbnail animate__animated animate__fadeInLeft"
          />
        </div>
        <div className="col-8 animate__animated animate__fadeIn">
          <h2>{hero.superhero}</h2>
          <p>{hero.description}</p>
          <HeroCaracts {...hero} />
          <button onClick={onGoBack} className="mt-5 btn btn-danger">
            Go Back
          </button>
        </div>
      </div>
    </>
  );
};
