import React, { useState } from "react";

const CatalogList = ({ category }) => {
  const [item, setItem] = useState(false);

  const handleItemSelect = (e) =>
    setItem(e.target.innerHTML === item ? false : e.target.innerHTML);

  return (
    <>
      <div
        className={
          item === category + " 01" ? "catalogItem selectedItem" : "catalogItem"
        }
        onClick={handleItemSelect}
      >
        {category} 01
      </div>
      <div
        className={
          item === category + " 02" ? "catalogItem selectedItem" : "catalogItem"
        }
        onClick={handleItemSelect}
      >
        {category} 02
      </div>
      <div
        className={
          item === category + " 03" ? "catalogItem selectedItem" : "catalogItem"
        }
        onClick={handleItemSelect}
      >
        {category} 03
      </div>
      <div className="itemBtns">
        <button className="btn">Reset</button>
        {item && <button className="btn">Apply</button>}
      </div>
    </>
  );
};

export default CatalogList;
