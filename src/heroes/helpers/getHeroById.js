import React from "react";
import { heroes } from "../data/HeroesData";

export const getHeroById = (id) => {
  return heroes.find((hero) => hero.id === id);
};
