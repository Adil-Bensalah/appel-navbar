import React from "react";
import "./AppelNavbar.css";
import appelLogo from "./assets/appel-logo.png";
import serch from "./Assets/serch.jpg";
import panier from "./Assets/panier.png";

export default function AppelNavBar() {
  return (
    <>
      <nav>
        <img src={appelLogo} alt="appel" className="appel-logo" />
        <div className="liste">
          <span>
            <a href="#">Store</a>
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
          <span>
            <a href="#">Assistance</a>
          </span>
        </div>
        <img src={serch} alt="serch" className="serch" />
        <img src={panier} alt="panier" className="panier" />
      </nav>
    </>
  );
}
