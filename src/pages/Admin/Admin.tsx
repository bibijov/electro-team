import React, { useState } from "react";

import "./styles.scss";
interface Props {}

const Admin = (props: Props) => {
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  const [hasAttempted, setHasAttempted] = useState<boolean>(false);
  const [attempt, setAttempt] = useState<string>("");
  function check(value: any) {
    if (value === "dario") {
      setIsAdmin(true);
      setHasAttempted(true);
    } else if (value !== "dario") {
      setIsAdmin(false);
      setHasAttempted(true);
    }
  }
  const [file, setFile] = useState<any>();
  function handleChange(e: any) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }
  return (
    <div className="adminPage">
      <div className="password">
        {!isAdmin && (
          <div className="centralPasswordBox">
            <h2>Unesite password</h2>
            <input
              type="password"
              name="adminPassword"
              id="adminPassword"
              onChange={(e) => setAttempt(e.target.value)}
              onSubmit={() => check(attempt)}
            />
            {attempt !== "" && (
              <button
                type="submit"
                onClick={() => check(attempt)}
                onSubmit={() => check(attempt)}
              >
                Potvrdi
              </button>
            )}
          </div>
        )}
        {isAdmin && (
          <div className="blogForm">
            <h1>Unesite novost</h1>
            <h2>Naslov novosti</h2>
            <input type="text" name="newsTitle" id="newsTitle" />
            <h2>Tekst novosti</h2>
            <textarea name="newsContent" id="newsContent" />
            <input type="file" onChange={handleChange} />
            {!!file && <img src={file} alt="blog" />}
          </div>
        )}
      </div>
    </div>
  );
};

export default Admin;
