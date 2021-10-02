import React from "react";
import { Link } from "react-router-dom";

function Quotes() {
  return (
    <div className="row mt-2">
      <div class="list-group col-6">
        <Link
          to="/quote/1"
          class="list-group-item list-group-item-action d-flex justify-content-between"
        >
          The current link item <strong>Test</strong>
        </Link>
      </div>
    </div>
  );
}

export default Quotes;
