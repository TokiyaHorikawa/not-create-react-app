import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Box from "@material-ui/core/Box";
import Layout from "./Layout"

const isLogin = true

const App = () => {

  // 認証系処理後に画面を表示する
  if (!isLogin) {
    return
  }

  return (
    <Box>
      <Router>
        <Layout />
      </Router>
    </Box>
  );
};

export default App;
