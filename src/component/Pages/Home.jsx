import React from "react";
import Bar from "../Navbar/Bar";
import policy from "../asset/policy.png";

function Home() {
  return (
    <div>
      <Bar />
      <img src={policy} Style="width:1280px;height:556px;" alt="policy" />
    </div>
  );
}

export default Home;
