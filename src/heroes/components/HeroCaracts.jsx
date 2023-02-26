import React from "react";

export const HeroCaracts = ({
  publisher,
  alter_ego,
  first_appearance,
  characters,
}) => {
  const characterSplit = characters.split(",");

  return (
    <>
      <h6>
        Publisher: <span className="badge bg-secondary">{publisher}</span>
      </h6>
      <h6>
        AlterEgo: <span className="badge bg-secondary">{alter_ego}</span>
      </h6>
      <h6>
        First Appearance:
        <span className="badge bg-secondary">{first_appearance}</span>
      </h6>
      <h6>
        Characters:
        {characterSplit.map((uniqueCharacter) => (
          <span key={uniqueCharacter} className="badge bg-secondary">
            {uniqueCharacter}
          </span>
        ))}
      </h6>
    </>
  );
};
