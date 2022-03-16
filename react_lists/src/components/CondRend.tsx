import { ChangeEvent, useState } from "react";

export function CondRend() {
  const [show, setShow] = useState(true);
  const [myNumber, setMyNumber] = useState(0);

  //   let html = <div>Nu syns jag!</div>;
  //   if (!show) {
  //     html = <></>;
  //   }

  function handleClick() {
    setShow(!show);
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setMyNumber(+e.target.value);
  }

  return (
    <>
      <button onClick={handleClick}>Klicka</button>
      {show && <div>Nu syns jag!</div>}

      <div>
        <input type="text" onChange={handleChange} />
        {myNumber > 10 && <p>Wow! Stort tal</p>}
        {myNumber <= 10 && <p>Pfft! Litet tal</p>}
      </div>
    </>
  );
}
