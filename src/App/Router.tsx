import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// pages
import Index from "@/pages/index";
import Sample from "@/pages/sample";

const BaseRouter: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={Index} />
      <Route exact path="/sample" component={Sample} />
      <Redirect to="/" />
    </Switch>
  );
};

export default BaseRouter;
