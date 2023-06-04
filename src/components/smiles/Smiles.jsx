import React from "react";
import s from "./Smiles.module.scss";

const Smiles = () => {
  return (
    <div>
      <select className={s.smiles}>
        <option value="😵️">😵️</option>
        <option value="🙃">🙃</option>
        <option value="😑">😑</option>
        <option value="🤔">🤔</option>
        <option value="🤤">🤤</option>
        <option value="😇">😇</option>
        <option value="🤤">🤤</option>
        <option value="😰">😰</option>
        <option value="😆">😆</option>
        <option value="😌">😌</option>
      </select>
    </div>
  );
};

export default Smiles;
