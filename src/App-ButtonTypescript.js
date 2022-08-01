import React from "react";
import CkaButton from "./components/ButtonTypescript";

export const App = ({ name = "Test Button" }) => {
  return <CkaButton>Hello {name}!</CkaButton>;
};
