import React from "react";
import "./App.css";
import { useGoodsQuery } from "./generated/graphql";

function App() {
  const { data, loading } = useGoodsQuery({
    variables: {
      param: {
        goodsId: "g-00001",
      },
    },
  });
  if (loading) {
    return <div className="App">loading data...</div>;
  }
  return <div className="App">{JSON.stringify(data?.goodsData, null, 4)}</div>;
}

export default App;
