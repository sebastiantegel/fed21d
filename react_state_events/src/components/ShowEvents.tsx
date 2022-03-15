import { ChangeEvent, useState } from "react";

export const ShowEvents = () => {
  const handleClick = () => {
    console.log("Du klickade");
  };

  const handleClickWithArgs = (msg: string) => {
    console.log(msg);
  };

  const [buttonArg, setButtonArg] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setButtonArg(e.target.value);
  };

  return (
    <>
      <button type="button" onClick={handleClick}>
        Testa
      </button>
      <button
        type="button"
        onClick={() => {
          handleClickWithArgs(buttonArg);
        }}
      >
        Testa argument
      </button>
      <div>
        <input type="text" onChange={handleChange} value={buttonArg} />
      </div>
    </>
  );
};
