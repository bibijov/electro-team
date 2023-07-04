import React from "react";
import { AiFillHome } from "react-icons/ai";
import { BsFillTelephoneFill, BsInfoCircle } from "react-icons/bs";
import { MdMail } from "react-icons/md";
import { ImClock } from "react-icons/im";

import "./styles.scss";

interface Props {}

const Footer = (props: Props) => {
  return (
    <div className="appFooter">
      <h1>DAR ELECTRO TEAM d.o.o</h1>
      <div className="footerQuick">
        <div className="quickInfo">
          <div className="quickTitle">
            <BsInfoCircle className="quickIcon" />
            <h1>Kontakt informacije</h1>
          </div>
          <div className="information">
            <AiFillHome className="quickIcon" />
            <p>Generala Vladimira Kontića 7</p>
          </div>
          <div className="information">
            <BsFillTelephoneFill className="quickIcon" />
            <p>011/770-90-36</p>
          </div>
          <div className="information">
            <BsFillTelephoneFill className="quickIcon" />
            <p>011/770-81-88</p>
          </div>
          <div className="information">
            <BsFillTelephoneFill className="quickIcon" />
            <p>064/59-55-009</p>
          </div>
          <div className="information">
            <MdMail className="quickIcon" />
            <p>electro_team@yahoo.com</p>
          </div>
          <div className="information">
            <MdMail className="quickIcon" />
            <p>office@darelectroteam.rs</p>
          </div>
          <div className="information">
            <MdMail className="quickIcon" />
            <p>dario@darelectroteam.rs</p>
          </div>
        </div>
        <div className="quickInfo">
          <div className="quickTitle">
            <ImClock className="quickIcon" />
            <h1>Radno vreme</h1>
          </div>
          <div className="information">
            <p>Radnim danima: 08-16h</p>
          </div>
          <div className="information">
            <p>Subotom: Ne radimo</p>
          </div>
          <div className="information">
            <p>Nedeljom: Ne radimo</p>
          </div>
        </div>
      </div>
      <div className="rights">
        <p>
          Sadržaj sajta je autorsko delo i isti nije dozvoljeno preuzimati i
          kopirati bez izričite dozvole Dar Electro Team d.o.o.
        </p>
      </div>
    </div>
  );
};

export default Footer;
