import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchQuotes } from "../features/Quote";
import { Loading } from "../components";

const Quotes = () => {
  const dispatch = useDispatch();
  const quotes = useSelector((state) => state.quote);

  useEffect(() => {
    if (quotes.status === "idle") {
      dispatch(fetchQuotes());
    }
  }, [dispatch, quotes.status]);

  if (quotes.status === "loading") {
    return <Loading />;
  }

  return (
    <div className="row mt-2">
      <div className="list-group col-12 col-md-8 col-lg-6">
        {quotes.items.length > 0 &&
          quotes.items.map((item) => (
            <Link
              key={item.quote_id}
              to={`/quote/${item.quote_id}`}
              className="list-group-item list-group-item-action d-flex justify-content-between"
            >
              {item.quote} <strong>{item.author}</strong>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Quotes;
