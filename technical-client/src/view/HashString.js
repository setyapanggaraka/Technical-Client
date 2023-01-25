import React, { useState, useEffect } from "react";
import CryptoJS from "crypto-js";
import formattedDate from "../utils/formattedDate";

export default function HashString() {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");

  let date = formattedDate();

  useEffect(() => {
    setName("ken");
    setGender("pria");
  }, []);

  const stringToHash = date + name + gender + "ifabula";
  const hashedString = CryptoJS.SHA256(stringToHash).toString();

  console.log(hashedString);

  return <div>Check the console for the hashed string</div>;
}
