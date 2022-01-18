import Header from "../components/header";
import Auth from "../components/auth";
import { useState, useEffect } from "react";
import Discover from "../components/discover";
import jwt from "jsonwebtoken";

export default function Home() {
  const [Logged, setLogged] = useState(false);

  useEffect(() => {
    const isLogin = document.cookie.match(
      new RegExp("(^| )access_token=([^;]+)")
    );
    try {
      const verify = jwt.verify(isLogin[2], "PICVUL_SECRET");
      setLogged(true);
    } catch (error) {
      setLogged(false);
    }
  });
  return (
    <>
      <Header pageTitle={"Home"} />
      {Logged ? <Discover /> : <Auth />}
    </>
  );
}
