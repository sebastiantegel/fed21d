import { ChangeEvent, useState } from "react";

interface INewUser {
  firstname: string;
  lastname: string;
  email: string;
}

export const Register = () => {
  const [newUser, setNewUser] = useState<INewUser>({
    firstname: "",
    lastname: "",
    email: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    let name: string = e.target.name;
    setNewUser({ ...newUser, [name]: e.target.value });
  };

  console.log(newUser);

  return (
    <>
      <form>
        <input
          type="text"
          name="firstname"
          value={newUser.firstname}
          onChange={handleChange}
        />
        <input
          type="text"
          name="lastname"
          value={newUser.lastname}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          value={newUser.email}
          onChange={handleChange}
        />
      </form>
    </>
  );
};
