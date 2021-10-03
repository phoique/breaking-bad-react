import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCharacters,
  nextPageNumber,
} from "../redux/Character/characterSlice";
import { CharacterItem, Loading } from "../components";

function Characters() {
  const dispatch = useDispatch();
  const characters = useSelector((state) => state.character);

  //fetch Characters
  useEffect(() => {
    if (characters.status === "idle") {
      dispatch(fetchCharacters({ limit: characters.limit, offset: 0 }));
    }
  }, [characters.limit, characters.status, dispatch]);

  if (characters.status === "failed") {
    return characters.error;
  }

  const handleNextData = () => {
    const nextPage = characters.currentPage + 1;
    dispatch(nextPageNumber(nextPage));
    const offset = characters.limit * nextPage;
    dispatch(fetchCharacters({ limit: characters.limit, offset }));
  };

  return (
    <div className="row mt-2">
      {characters.items.length > 0 &&
        characters.items.map((item) => (
          <CharacterItem key={item.char_id} character={item} />
        ))}

      <div className="text-center">
        {characters.status === "loading" && (
          <Loading />
        )}
        {characters.hasNextPage && characters.status !== "loading" && (
          <button
            onClick={handleNextData}
            type="button"
            className="btn btn-light mb-3"
          >
            Next Characters
          </button>
        )}
      </div>
    </div>
  );
}

export default Characters;
