import React from "react";
import { useSelector } from "react-redux";
import Splash from "../Splash";
import UserMain from "../UserMain";

import "./Main.css";

export default function Main() {
  const user = useSelector((state) => state.session.user);

  let decideView;

  if (user) {
    decideView = <UserMain user={user} />;
  } else {
    decideView = <Splash />;
  }

  return <div>{decideView}</div>;
}
