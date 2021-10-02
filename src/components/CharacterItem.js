import React from "react";
import { Link } from "react-router-dom";

function CharacterItem({ character }) {
  return (
    <div className="col-3 mb-2">
      <Link to={"/character/" + character.char_id} className="characters">
        <div className="card">
          <img src={character.img} className="card-img-top" alt="character_photo" />
          <div className="card-body">
            <p className="card-text text-center">{character.name}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default CharacterItem;
