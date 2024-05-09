import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import React from "react";
import { app } from "../firebase";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useContext } from "react";

export default function OAuth() {
  const navigate = useNavigate();

  const handleGoogleClick = async (e) => {
    e.preventDefault();
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);

      const result = await signInWithPopup(auth, provider);

      const res = await axios.post(
        "http://localhost:8000/google",
        {
          name: result.user.displayName,
          email: result.user.email,
          photo: result.user.photoURL,
        },
        {
          headers: {
            "Access-Control-Allow-Origin": "http://localhost:3000",
            "Content-Type": "application/json",
          },
          withCredentials: true, // Cookie credentials (tokens)
        }
      );
      const data = await res.data;
      if (res.status === 200) {
        navigate("/");
      }
      console.log(result);
    } catch (error) {
      console.log("could not sign in with google", error);
    }
  };
  return (
    <button onClick={handleGoogleClick} type="button">
      CONTINUE WITH GOOGLE
    </button>
  );
}
