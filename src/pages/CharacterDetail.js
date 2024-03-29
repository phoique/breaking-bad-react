import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchCharacterById } from "../features/Character/characterSlice";
import { Loading } from "../components";

const CharacterDetail = () => {
  const { id } = useParams();
  const state = useSelector((s) => s.character);
  const dispatch = useDispatch();

  const [detail, setDetail] = useState();

  useEffect(() => {
    if (id) {
      const findCacheData = state.items.find(
        (item) => item.char_id === Number(id)
      );
      if (findCacheData) {
        setDetail(findCacheData);
      }
      dispatch(fetchCharacterById(id));
    }
  }, [dispatch, id, state.items]);

  if (state.detail.status === "loading") {
    return <Loading center={false} />;
  }

  return (
    <div className="character-detail">
      <img
        src={detail?.img || state.detail.item?.img}
        className="img-thumbnail rounded"
        height="200"
        width="200"
        alt="character_photo"
      />
      <div className="info">
        <p>
          <strong>Name: </strong> {detail?.name || state.detail.item?.name}
        </p>

        <p>
          <strong>Birthday: </strong>{" "}
          {detail?.birthday || state.detail.item?.birthday}
        </p>

        <p>
          <strong>Nickname: </strong>{" "}
          {detail?.nickname || state.detail.item?.nickname}
        </p>
      </div>
    </div>
  );
};

export default CharacterDetail;
