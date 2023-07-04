import { useEffect, useRef, useState } from "react";

import Team from "./team.jpg";
import Welcome from "./welcome.png";
import { Category, CategorySubGroup, products } from "../../utils";
import _ from "lodash";
import { GiSpeedometer } from "react-icons/gi";
import { FaMedal } from "react-icons/fa";
import { BiCart } from "react-icons/bi";
import Lights from "../../images/lights.jpg";
import { useNavigate } from "react-router";
import coffee from "./coffee.jpg";
import ReactAudioPlayer from "react-audio-player";

import Alignconel from "../../partners/alignconel.png";
import Antenal from "../../partners/antenal.png";
import Braytron from "../../partners/braytron.png";
import Elid from "../../partners/elid.png";
import Elzi from "../../partners/elzi.png";
import Eti from "../../partners/eti.png";
import Frigoplast from "../../partners/frigoplast.png";
import Horoz from "../../partners/horoz.png";
import Kettz from "../../partners/kettz.png";
import Lambario from "../../partners/lambario.png";
import Maktrade from "../../partners/maktrade.png";
import Metalkamajur from "../../partners/metalkamajur.png";
import Mutlusan from "../../partners/mutlusan.png";
import Nopallux from "../../partners/nopallux.png";
import Optonica from "../../partners/optonica.png";
import Plamen from "../../partners/plamen.png";
import Tabelektrik from "../../partners/tebelektrik.png";
import Tehnoelektrotim from "../../partners/tehnoelektrotim.png";
import trgovinamatejic from "../../partners/trgovinamatejic.png";
import Tfkable from "../../partners/tfkable.png";
import rumetal from "../../partners/rumetal.png";
import Varta from "../../partners/varta.png";

import "./styles.scss";
import Banner from "../../components/Banner/Banner";
const sound = require("./etmp3.mp3");

interface Partner {
  name: string;
  source: string;
  link?: string;
}
const partneri: Array<Partner> = [
  {
    name: "Braytron",
    source: Braytron,
    link: "https://www.braytron.com/sr",
  },
  {
    name: "Horoz",
    source: Horoz,
    link: "https://www.horozeurope.com/",
  },
  {
    name: "TEB Elektrik",
    source: Tabelektrik,
    link: "https://tebelektrik.com/",
  },
  {
    name: "Plamen",
    source: Plamen,
    link: "https://www.plamen.rs/en/homeen/",
  },
  {
    name: "ETI",
    source: Eti,
    link: "https://www.etib.rs/",
  },
  {
    name: "Antenall",
    source: Antenal,
    link: "https://www.antenall.rs/sr/",
  },
  {
    name: "Kettz",
    source: Kettz,
    link: "https://www.velteh.rs/",
  },
  {
    name: "Trgovina Matejic",
    source: trgovinamatejic,
    link: "https://matejic.rs/",
  },
  {
    name: "RU Metal",
    source: rumetal,
    link: "https://www.rumetaltrade.com/",
  },
  {
    name: "TEHNOELEKTRO-TIM DOO",
    source: Tehnoelektrotim,
    link: "https://tehnoelektro.rs/",
  },
  {
    name: "Align Conel",
    source: Alignconel,
    link: "https://www.aling-conel.com/en/",
  },
];

interface Props {}
const Homepage = (props: Props) => {
  const zvuk = useRef<HTMLAudioElement>(null);
  useEffect(() => {
    const pG = _.find(products, { title: "LED Sijalice" });
    console.log(pG);
  }, []);

  const navigate = useNavigate();

  return (
    <div className="homePage">
      <div
        className="welcome"
        style={{
          backgroundImage: `url(${Welcome})`,
          backgroundRepeat: "no-repeat",
        }}
      >
        <ReactAudioPlayer
          src={sound}
          autoPlay={true}
          muted={false}
          preload="auto"
          controls
          style={{
            position: "absolute",
            top: "0",
            left: "0",
          }}
        />
        <div className="welcomeText">
          <h1>Dar Electro Team</h1>
          <p>
            Firma Dar Electro Team, osnovana 2020. godine je porodična firma
            koja kreće u realizaciju ideja i ostvarenje ciljeva koji su njeni
            vlasnici postavili kroz dugogodišnji rad u o ovoj oblasti.
          </p>
        </div>
      </div>
      <h1 className="headerOne">Zašto baš mi?</h1>
      <div className="whyUs">
        <div className="reasons">
          <p>
            Objedinjujući veliki broj kako domaćih tako i inostranih proizvođača
            elektromaterijala i rasvete, Dar Electro Team zauzima distributersku
            poziciju pa u svojoj paleti ima interesantne proizvode kako za kućne
            i majstorske potrebe, tako i za zahteve ozbiljnijih projekata
            (industrija i sl.)
          </p>
          <p>
            Osim dobro organizovane nabavke, konkurentskih cena (prilagođenih
            tržištu) Dar Electro Team na Vaš zahtev isporučuje robu po sistemu
            "danas za sutra" odnosno najkasnije za 48h.
          </p>
        </div>
        <div className="reasonsTwo">
          <div className="reasonCard">
            <GiSpeedometer className="reasonIcon" />
            <p>Brza i efikasna dostava</p>
          </div>
          <div className="reasonCard">
            <BiCart className="reasonIcon" />
            <p>Širok asortiman proizvoda</p>
          </div>
          <div className="reasonCard">
            <FaMedal className="reasonIcon" />
            <p>Dugogodišnje iskustvo</p>
          </div>
        </div>
      </div>
      <div
        className="container"
        style={{
          backgroundImage: `url(${Lights})`,
        }}
      >
        <h1 className="headerOne">Istaknute kategorije</h1>
        <div className="categoriesBox">
          {products.map((product) => {
            if (
              product.title == "LED Sijalice" ||
              product.title == "Ugradni i nadgradni LED paneli" ||
              product.title ==
                "LED reflektori sa i bez senzora, ulične svetiljke" ||
              product.title == "Industrijska rasveta"
            )
              return (
                <div
                  className="categoryBox"
                  onClick={() => navigate(`/category/${product.id}`)}
                >
                  <img src={product.bgThumb} alt={product.title} />
                  <p>{product.title}</p>
                </div>
              );
          })}
        </div>
        <div className="viewAll">
          <button onClick={() => navigate(`/categories`)}>
            Pogledajte sve kategorije
          </button>
        </div>
      </div>

      <h1 className="headerOne">Naši partneri</h1>
      <div className="partners">
        {partneri.map((partner) => {
          return (
            <div
              className="partnersBox"
              onClick={() => {
                if (partner.link) window.open(partner.link);
              }}
            >
              <img src={partner.source} alt={partner.name} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Homepage;
