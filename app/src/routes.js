import React from "react";
import { BrowserRouter, Route, Routes as Switch } from "react-router-dom";

import Home from "./pages/Home";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" element={<Home />} />
      </Switch>
    </BrowserRouter>
  );
}
