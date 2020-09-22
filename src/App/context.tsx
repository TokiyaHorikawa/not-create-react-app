import * as React from "react";
import { useArticlesReducer } from "@/hooks/useArticles";

const ReducerContext = React.createContext(undefined);

export const Provider = ({ children }: any) => {
  const articles = useArticlesReducer();
  const value = {
    articles,
  };

  return (
    <ReducerContext.Provider value={value}>{children}</ReducerContext.Provider>
  );
};

export const useProvider = () => {
  const context = React.useContext(ReducerContext);

  if (context === undefined) {
    throw new Error("useProvider must be used within a BOAppProvider");
  }
  return context;
};
