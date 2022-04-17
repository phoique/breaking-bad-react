import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchQuoteById, quoteSelectors } from "../redux/Quote";

const QuoteDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const quotes = useSelector((state) => state.quote);
  const findCacheData = useSelector((state) =>
    quoteSelectors.selectById(state, id)
  );
  const [quoteCache, setQuoteCache] = useState();

  useEffect(() => {
    if (findCacheData) {
      setQuoteCache(findCacheData);
    } else {
      dispatch(fetchQuoteById(id));
    }
  }, [dispatch, findCacheData, id, quotes.items]);

  return (
    <div className="quote-detail">
      <div className="info">
        <p>
          <strong>Quote: </strong>
          {quotes.detail.status === "loading" ? (
            <span className="placeholder col-4" />
          ) : (
            quoteCache?.quote || quotes?.detail?.item?.quote
          )}
        </p>

        <p>
          <strong>Author: </strong>
          {quotes.detail.status === "loading" ? (
            <span className="placeholder col-2" />
          ) : (
            quoteCache?.author || quotes?.detail?.item?.author
          )}
        </p>

        <p>
          <strong>Series: </strong>
          {quotes.detail.status === "loading" ? (
            <span className="placeholder col-2" />
          ) : (
            quoteCache?.series || quotes?.detail?.item?.series
          )}
        </p>
      </div>
    </div>
  );
};

export default QuoteDetail;
