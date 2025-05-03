import React from "react";
import HeroSm from '../../components/HeroSm/HeroSm';
import HeroLarge from '../../components/HeroLarge/HeroLarge';

export default function Hero() {
  return (
    <>
      <div className="hidden lg:flex">
        <HeroLarge/>
      </div>

      <div className="block lg:hidden">
        <HeroSm/>
      </div>
    </>
  );
}
