import React, { useEffect, useRef, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCharacters,
  nextPageNumber,
} from "../redux/Character/characterSlice";
import { CharacterItem, Loading } from "../components";

const Characters = () => {
  const dispatch = useDispatch();
  const characters = useSelector((state) => state.character);
  const observer = useRef();

  const lastItemRef = useCallback(
    (node) => {
      if (characters.status === "loading") return;
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && characters.hasNextPage) {
          const nextPage = characters.currentPage + 1;
          dispatch(nextPageNumber(nextPage));
          const offset = characters.limit * nextPage;
          dispatch(fetchCharacters({ limit: characters.limit, offset }));
        }
      });

      if (node) observer.current.observe(node);
    },
    [characters, dispatch]
  );

  // fetch Characters
  useEffect(() => {
    if (characters.status === "idle") {
      dispatch(fetchCharacters({ limit: characters.limit, offset: 0 }));
    }
  }, [characters.limit, characters.status, dispatch]);

  if (characters.status === "failed") {
    return characters.error;
  }

  return (
    <div className="row mt-2">
      {characters.items.length > 0 &&
        characters.items.map((item) => (
          <CharacterItem
            lastItemRef={lastItemRef}
            key={item.char_id}
            character={item}
          />
        ))}

      <div className="text-center">
        {characters.status === "loading" && <Loading />}
      </div>
    </div>
  );
};

export default Characters;
