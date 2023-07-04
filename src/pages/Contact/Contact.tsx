import React, { useState, useRef } from "react";

import "./styles.scss";

import { BsFillTelephoneFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { HiLocationMarker } from "react-icons/hi";
import emailjs from "@emailjs/browser";
import ContactForm from "../../components/ContactForm/ContactForm";

interface Props {}

const Contact = (props: Props) => {
  return (
    <div className="contactPage">
      <h1>Kontakt</h1>
      <div className="contactBox">
        <div className="contactInfo">
          <div className="contactInfoBox">
            <div className="contactLogo">
              <BsFillTelephoneFill className="contactIcon" />
            </div>
            <h2>Telefon</h2>

            <div className="contactInfoText">
              <a href="tel:0117709036">011/770-90-36</a>
              <a href="tel:0117708188">011/770-81-88</a>
              <a href="tel:0645955009">064/59-55-009</a>
            </div>
          </div>
          <div className="contactInfoBox">
            <div className="contactLogo">
              <AiOutlineMail className="contactIcon" />
            </div>
            <h2>E-mail</h2>
            <div className="contactInfoText">
              <a href="mailto:electro_team@yahoo.com">electro_team@yahoo.com</a>
              <a href="mailto:office@darelectroteam.rs">
                office@darelectroteam.rs
              </a>
              <a href="mailto:dario@darelectroteam.rs">
                dario@darelectroteam.rs
              </a>
            </div>
          </div>
          <div className="contactInfoBox">
            <div className="contactLogo">
              <HiLocationMarker className="contactIcon" />
            </div>
            <h2>Adresa</h2>
            <div className="contactInfoText">
              <a href="http://maps.google.com?q=48.8583736,2.2922926">
                Generala Vladimira Kontica br. 7
              </a>
            </div>
          </div>
        </div>
        <ContactForm />
        <div className="contactMap">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1001.7095445066899!2d20.496447315751574!3d44.755062064518526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a7146f3e24d95%3A0x4c90b4d5ab919a50!2sDAR%20ELECTRO%20TEAM!5e0!3m2!1sen!2srs!4v1667937121602!5m2!1sen!2srs"
            width="600"
            height="450"
            loading="lazy"
            title="Google map"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
