import React, { useState } from "react";
import emailjs from "@emailjs/browser";

import "./styles.scss";

interface Props {}

const ContactForm = (props: Props) => {
  const [name, setName] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [isSent, setIsSent] = useState<boolean>(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    emailjs
      .send(
        "service_fq66dua",
        "template_1gnp8oi",
        { from_name: name, message: message, reply_to: email },
        "a8VTBkKzmf8p4G1Bd"
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsSent(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.currentTarget.reset();
  };
  return (
    <form onSubmit={sendEmail}>
      <label>Ime i prezime</label>
      <input
        type="text"
        name="ime"
        id="ime"
        placeholder="Unesite svoje ime"
        required
        onChange={(e) => setName(e.target.value)}
      />
      <label>Email</label>
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Unesite svoj email"
        required
        onChange={(e) => setEmail(e.target.value)}
      />
      <label>Poruka</label>
      <textarea
        name="poruka"
        id="poruka"
        placeholder="Unesite poruku"
        required
        onChange={(e) => setMessage(e.target.value)}
      />
      <button type="submit">Pošaljite poruku</button>
      {isSent && <p>Poruka je poslata</p>}
    </form>
  );
};

export default ContactForm;
