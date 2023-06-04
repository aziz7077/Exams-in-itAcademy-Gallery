import React from "react";
import s from "./Header.module.scss";
import logo from "../../assets/logo.png";
import btn1 from "../../assets/btn1.png";
import btn2 from "../../assets/btn2.png";
import Smiles from "../smiles/Smiles";
import Search from './../search/Search';

const Header = () => {
  return (
    <div className={s.container}>
      <header>
        <img className={s.logo} src={logo} alt="logo" />
        <Search/>
        <Smiles />
        <button className={s.btn1}>
          <img className={s.img1} src={btn1} alt="btn1" /> Список
        </button>
        <button className={s.btn2}>
          <img className={s.img2} src={btn2} alt="btn2" /> Запись
        </button>
      </header>
    </div>
  );
};

export default Header;
