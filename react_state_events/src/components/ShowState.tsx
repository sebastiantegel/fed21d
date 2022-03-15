import { useState } from "react";

export function ShowState() {
  // En vanlig variabel uppdaterar inte värdet på skärmen
  //let name: string = "Sebastian";

  // En state-variabel kommer att lösa detta åt oss
  const [name, setName] = useState("Sebastian");

  function changeName() {
    // Kan inte ändra på en konstant
    // name = "Hanna";

    if (name === "Sebastian") {
      setName("Hanna");
    } else {
      setName("Sebastian");
    }
  }

  return <div onClick={changeName}>{name}</div>;
}
