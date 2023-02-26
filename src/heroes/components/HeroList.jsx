import React, { useMemo } from "react";
import { getHeroByPublisher } from "../helpers";
import { HeroCard } from "./HeroCard";

export const HeroList = ({ publisher }) => {
  const heroesList = useMemo(() => getHeroByPublisher(publisher), [publisher]);
  return (
    <>
      <div className="row rows-cols-1 row-cols-md-2 pt-5 pb-5 d-flex justify-content-center animate__animated animate__fadeIn gap-2">
        {heroesList.map((hero) => (
          <HeroCard key={hero.id} {...hero} />
        ))}
      </div>
    </>
  );
};
