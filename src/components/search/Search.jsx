import React from "react";
import s from './Search.module.scss'

const Search = () => {
  return (
    <div>
      <input className={s.search} type="text" placeholder="Поиск" />
    </div>
  );
};

export default Search;
