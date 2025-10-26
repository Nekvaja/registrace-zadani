import { useState } from "react"

interface userStructure {
    userName: string,
    email: string,
    password: string,
    passwordConfirm: string,
}

export const Registration = () => {

    const [user, setUser] = useState<userStructure>({
        userName: '',
        email: '',
        password: '',
        passwordConfirm: '',
    })

     const isValidEmail =(email : string) : boolean => {
            if (email.includes('@')) {
                return true
            } return false;
           
        } 

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const name: string = e.target.name;
      const value: string = e.target.value;

      setUser((prev) => {
        const updatedUser = { ...prev };

        if (name === "email") {
          updatedUser.email = value;
          if (isValidEmail(value) && updatedUser.userName === "") {
            updatedUser.userName = value.split("@")[0];
          }
        }

        if (name === "userName") {
          updatedUser.userName = value;
        }

        if (name === "password") {
          updatedUser.password = value;
        }

        if (name === "passwordConfirm") {
          updatedUser.passwordConfirm = value;
        }

        return updatedUser;
      });
    }; 

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(user)
    }

   

    return (
      <form onSubmit={handleSubmit}>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Email"
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
          type="text"
          name="passwordConfirm"
          placeholder="Confirm Password"
          aria-label="Confirm Password"
          value={user.passwordConfirm}
          onChange={handleChange}
        />

        <button type="submit">Register</button>
      </form>
    );
}