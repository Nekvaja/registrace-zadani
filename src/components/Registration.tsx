import "./Registration.css"
import { useState } from "react";


interface UserStructure {
  userName: string;
  email: string;
  password: string;
  passwordConfirm: string;
}

export const Registration = () => {
  const [user, setUser] = useState<UserStructure>({
    userName: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const isValidEmail = (email: string): boolean => (email.includes("@"));


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
     const { value, name} = e.target;

    setUser((prev) => {
      const updatedUser = { ...prev, [name]: value };

      if (name === "email" && isValidEmail(value) && !prev.userName ) {
       updatedUser.userName = value.split("@")[0];
      }

      return updatedUser;
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(user);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-inputs">
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Email Adress"
          aria-label="Email"
          value={user.email}
          onChange={handleChange}
        />

        <input
          id="userName"
          type="text"
          name="userName"
          placeholder="User Name"
          aria-label="User Name"
          value={user.userName}
          onChange={handleChange}
        />

        <input
          id="password"
          type="password"
          name="password"
          placeholder="Password"
          aria-label="Password"
          value={user.password}
          onChange={handleChange}
        />

        <input
          id="passwordConfirm"
          type="password"
          name="passwordConfirm"
          placeholder="Confirm Password"
          aria-label="Confirm Password"
          value={user.passwordConfirm}
          onChange={handleChange}
        />
      </div>

      <button type="submit">REGISTER</button>
    </form>
  );
};
