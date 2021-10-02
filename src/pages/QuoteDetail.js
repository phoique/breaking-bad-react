import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchQuoteById } from "../redux/Quote/quoteSlice";

function QuoteDetail() {
  const {id} = useParams();
  const dispatch = useDispatch();
  const quotes = useSelector(state => state.quote);
  const [quoteCache, setQuoteCache] = useState();

  useEffect(() => {
    if(quotes.items.length > 0) {
      const findData = quotes.items.find(item => item.quote_id === Number(id));
      setQuoteCache(findData);
    }
    else {
      dispatch(fetchQuoteById(id));
    }
  }, [dispatch, id, quotes.items]);

  return (
    <div className="quote-detail">
      <div className="info">
        <p>
          <strong>Quote: </strong> {quoteCache?.quote || quotes?.detail?.item?.quote}
        </p>

        <p>
          <strong>Author: </strong>{quoteCache?.author || quotes?.detail?.item?.author}
        </p>

        <p>
          <strong>Series: </strong> {quoteCache?.series || quotes?.detail?.item?.series}
        </p>
      </div>
    </div>
  );
}

export default QuoteDetail;
