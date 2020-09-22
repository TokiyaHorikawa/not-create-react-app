import React from "react";

import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Navigator from "@/components/Navigator";

import BaseRouter from "./Router";

const Layout: React.FC = () => {
  return (
    <Grid container>
      <Grid item xs={12} sm={2}>
        <Navigator />
      </Grid>
      <Grid item xs={12} sm={10}>
        <Container>
          <BaseRouter />
        </Container>
      </Grid>
    </Grid>
  );
};

export default Layout;
