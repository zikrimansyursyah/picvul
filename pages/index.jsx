import Header from "../components/header";
import Auth from "../components/auth";
import { useEffect, useState } from "react";
import Discover from "../components/discover";

export default function Home() {
  const [Logged, setLogged] = useState(false);

  useEffect(() => {
    let isAuth = sessionStorage.getItem("logged");
    if (isAuth) setLogged(true);
  }, []);

  return (
    <>
      <Header pageTitle={"Home"} />
      {Logged ? <Discover /> : <Auth />}
    </>
  );
}
