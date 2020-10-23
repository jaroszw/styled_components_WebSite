import React from "react";
import { InfoSection } from "../../components";
import { homeObjOne } from "./Data";

export const Home = () => {
  return (
    <div>
      <InfoSection {...homeObjOne} />
    </div>
  );
};

export default Home;
