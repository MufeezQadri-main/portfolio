import YouCard from "./YouCard";
import { Suspense } from "react";

const HeroExperience = () => {
  return (
    <Suspense fallback={null}>
      <YouCard />
    </Suspense>
  );
};

export default HeroExperience;
