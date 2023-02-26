import React from "react";

export const HeroFooter = () => {
  return (
    <>
      <div className="mt-5 card text-center bg-dark " data-bs-theme="dark">
        <div className="card-body text-white p-5">
          <h5 className="card-title">developed by abdel arocha</h5>
          <p className="card-text">
            React course development by Fernando Herrera
          </p>
          <a
            href="https://www.linkedin.com/in/abdel-arocha-732507b2/"
            className="btn btn-primary"
            target="_blank"
          >
            Linkedin
          </a>
        </div>
      </div>
    </>
  );
};
