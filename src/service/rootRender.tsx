import React from "react";
import { render } from "react-dom";

export default function rootRender(App: any) {
  render(
    <>
      <App />
    </>,
    document.getElementById("root")
  );
}
