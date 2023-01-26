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

  return (
    <>
      <div className="flex flex-col">
        <div className="flex items-center justify-center h-screen bg-gray-200">
          <div className="card w-auto bg-base-100 shadow-xl">
            <div className="card-body">
              <div className="text-center">
                <h2 className="card-title">Hash: {hashedString}</h2>
              </div>
              <div className="card-actions justify-center"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
