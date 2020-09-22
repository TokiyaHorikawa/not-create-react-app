import React from "react";
import { hot } from "react-hot-loader/root";
import rootRender from "@/service/rootRender";
import Input from "@/components/Input";

const Login = () => {
  const initialValue = {
    text: "",
    password: "",
  };
  const form = React.useState(initialValue);

  const handleLogin = () => {
    console.log('ログイン', form)
  }
  return (
    <div>
      <Input
        type="tel"
        className="form-control"
        name="userId"
        form={form}
        errorMsg="ユーザーIDを入力してください"
      />
      <Input
        type="tel"
        className="form-control"
        name="password"
        form={form}
        errorMsg="パスワードを入力してください"
      />
      <button onClick={handleLogin}>ログイン</button>
    </div>
  );
}

rootRender(process.env.NODE_ENV === "development" ? hot(Login) : Login);

export default Login;
