import React, { useContext, useId } from "react";
import { FiltersContext } from "../../context/FiltersProvider";

export const FiltersComponent = () => {
  const { filters, setFilters } = useContext(FiltersContext);

  const filterInputMinPrice = useId();
  const filterInputCategory = useId();

  const onMinPriceChange = ({ target }) => {
    setFilters({
      ...filters,
      minPrice: target.value++,
    });
  };

  const onCategoryChange = ({ target }) => {
    setFilters({
      ...filters,
      category: target.value,
    });
  };

  return (
    <div className="filters">
      <div className="filter-minPrice">
        <input
          type="range"
          name=""
          id={filterInputMinPrice}
          min="0"
          max="1000"
          onChange={onMinPriceChange}
        />
        <small>{filters.minPrice}</small>
      </div>

      <select
        name="filterInputCategory"
        id={filterInputCategory}
        onChange={onCategoryChange}
      >
        <option value="all">All</option>
        <option value="laptops">Laptops</option>
        <option value="smartphones">SmartPhones</option>
        <option value="groceries">Groceries</option>
      </select>
    </div>
  );
};
