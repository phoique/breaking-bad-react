import React from "react";
import { Link } from "react-router-dom";

function Characters() {
  return (
    <div className="row mt-2">
      <div className="col-3 mb-2">
        <Link to="/character/1" className="characters">
          <div className="card">
            <img
              src="https://vignette.wikia.nocookie.net/breakingbad/images/1/16/Saul_Goodman.jpg/revision/latest?cb=20120704065846"
              className="card-img-top"
              alt="character_photo"
            />
            <div className="card-body">
              <p className="card-text text-center">Saul Goodman</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Characters;
