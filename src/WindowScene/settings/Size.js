import React, { useState } from "react";

const Size = ({ curr, heightRef, widthRef, applySize }) => {
  const [hide, setHide] = useState(false);

  const apply = (e) => {
    e.preventDefault();
    applySize();
    setHide(!hide);
  };

  return (
    <form className="windowSizeForm" onSubmit={apply}>
      <h3 onClick={() => setHide(!hide)}>Window Size</h3>
      {!hide && (
        <>
          <div className="inputContainer">
            <label htmlFor="height">Height</label>
            <input
              type="number"
              id="height"
              name="height"
              defaultValue={curr.height}
              ref={heightRef}
            />
          </div>
          <div className="inputContainer">
            <label htmlFor="width">Width</label>
            <input
              type="number"
              id="width"
              name="width"
              defaultValue={curr.width}
              ref={widthRef}
            />
          </div>
          <button className="btn applyBtn" type="submit">
            Apply
          </button>
        </>
      )}
      {hide && (
        <div className="winSizeDetails">
          h: {curr.height} cm, w: {curr.width} cm
        </div>
      )}
    </form>
  );
};

export default Size;
