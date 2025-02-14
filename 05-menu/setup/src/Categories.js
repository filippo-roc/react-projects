import React from 'react';

const Categories = ({ categories, filterItems }) => {
  return (
    <div className="btn-container">
      {categories.map((category, index) =>
        <button
          type="button"
          key={index}
          onClick={() => filterItems(category)} className="filter-btn">
          {category}
        </button>
      )}
    </div>)

};

export default Categories;
