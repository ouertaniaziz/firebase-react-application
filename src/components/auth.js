import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../config/firebase";
const Auth = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const signIn = async () => {
    await createUserWithEmailAndPassword(auth, email, password);
  };
  return (
    <div>
      <input
        placeholder="Email..."
        onChange={(e) => setemail(e.target.value)}
      />
      <input
        placeholder="password..."
        onChange={(e) => setpassword(e.target.value)}
      />
      <button onClick={signIn}>Sign In</button>
    </div>
  );
};

export default Auth;
