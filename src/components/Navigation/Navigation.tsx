import React, { useState } from "react";
import { GoThreeBars } from "react-icons/go";
import { useNavigate } from "react-router";
import Logo from "../../logo.png";

import "./styles.scss";

interface Props {}
const Navigation = (props: Props) => {
  const [navDrawer, setNavDrawer] = useState<boolean>(false);
  const navigate = useNavigate();

  return (
    <div className="navigation">
      <div className="largeNav">
        <img
          src={Logo}
          alt="dar electro team"
          onClick={() => navigate("../")}
        />

        <div className="right">
          <p onClick={() => navigate("../")}>Početna</p>
          <p onClick={() => navigate("../categories")}>Proizvodi</p>
          <p onClick={() => navigate("../contact")}>Kontakt</p>
        </div>
      </div>
      <div className="smallNav">
        <GoThreeBars
          className="navIcon"
          onClick={() => setNavDrawer(!navDrawer)}
        />
      </div>
      <div
        className="navDrawer"
        style={{
          left: navDrawer ? "0px" : "-350px",
        }}
      >
        <p
          onClick={() => {
            navigate("../");
            setNavDrawer(false);
            window.scrollTo(0, 0);
          }}
        >
          Početna
        </p>
        <p
          onClick={() => {
            navigate("../categories");
            setNavDrawer(false);
            window.scrollTo(0, 0);
          }}
        >
          Proizvodi
        </p>
        <p
          onClick={() => {
            navigate("../contact");
            setNavDrawer(false);
            window.scrollTo(0, 0);
          }}
        >
          Kontakt
        </p>
      </div>
    </div>
  );
};

export default Navigation;
