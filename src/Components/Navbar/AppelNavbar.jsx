import React, { useState, useEffect } from "react";
import "./AppelNavbar.css";
import appelLogo from "./assets/appel-logo.png";
import serch from "./Assets/serch.jpg";
import panier from "./Assets/panier.png";
import { FaBars, FaTimes } from "react-icons/fa";

export default function AppelNavBar() {
  const [toggle, setToggle] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  console.log(toggle);
  const handelResize = () => {
    setWidth(window.innerWidth);
  };

  console.log(width);
  useEffect(() => {
    window.addEventListener("resize", handelResize);

    return () => {
      window.removeEventListener("resize", handelResize);
    };
  }, []);

  const handelClick = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <nav>
        <img src={appelLogo} alt="appel" className="appel-logo" />

        <div
          className={toggle || width > 770 ? "liste liste-toggle " : "liste"}
        >
          <span>
            <a href="#">Store </a>
          </span>
          <span>
            <a href="#">Mac</a>
          </span>
          <span>
            <a href="#">iPad</a>
          </span>
          <span>
            <a href="#">iPhone</a>
          </span>
          <span>
            <a href="#">Watch</a>
          </span>
          <span>
            <a href="#">AirPods</a>
          </span>
          <span>
            <a href="#">TV & Maison</a>
          </span>
          <span>
            <a href="#">Divertissement</a>
          </span>
          <span>
            <a href="#">Accessoires</a>
          </span>
        </div>

        <div className="btns">
          <img src={serch} alt="serch" className="serch" />
          <img src={panier} alt="panier" className="panier" />
        </div>
        <button
          onClick={handelClick}
          className={toggle ? "toggle-btn" : "hight-btn"}
        >
          <span className={toggle ? " line active-l1 " : "line l1"}></span>
          <span className={toggle ? " line active-l2" : "line l2"}></span>
        </button>
      </nav>
    </>
  );
}
