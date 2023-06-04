import React, { useState } from "react";
import s from "./Cards.module.scss";

const Cards = ({ name, img, dicoretion, data, smaylik, desc }) => {
  const [modal, setModal] = useState(false);

  return (
    <>
      <div className={s.cards} onClick={()=> setModal(true)}>
        <img className={s.images} src={img} alt="" />

        <div className={s.user_card_content}>
          <div className={s.card_info}>
            <h4>{name}</h4>
            <h6>{data}</h6>
            <h1>{dicoretion}</h1>
          </div>
                  <h1 className={s.small}>{smaylik} </h1>

        </div>
      </div>

      <div className={modal ? s.bg_modal : s.bg_modal_active }>
        <div className={s.Modal}>
          <h6>{smaylik}</h6>
          <h1>{name}</h1>
          <h2>{data}</h2>
          <img src={img} alt="img" />
          <p>{desc}</p>
          <button onClick={()=> setModal(false)}>x</button>
        </div>
      </div>
    </>
  );
};

export default Cards;
