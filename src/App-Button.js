import React from "react";
import { CkaButton } from "./components/Button";

export const App = ({ name = "Test Button" }) => {
  return <CkaButton>Hello {name}!</CkaButton>;
};
