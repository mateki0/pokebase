import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import PokeballWrapper from './styled/PokeballWrapper';
import OpenSpan from './styled/OpenSpan';
import PokeImage from './styled/PokeballImage';

const Pokeball = ({ ...props }) => {
  const Poke = useRef<HTMLImageElement>(null!);
  useEffect(() => {
    gsap.registerEffect({
      name: 'fade',
      effect: (targets: gsap.TweenTarget, config: { duration: number }) => {
        return gsap.to(targets, { duration: config.duration, opacity: 1 });
      },
      defaults: { duration: 1 },
      extendTimeline: true,
    });
    gsap.effects.fade(Poke.current);
  }, []);
  return (
    <PokeballWrapper>
      <OpenSpan>Click Pokeball</OpenSpan>
      <PokeImage ref={Poke} onClick={() => props.showCards()} src="./pokeball.png" />
    </PokeballWrapper>
  );
};

export default Pokeball;
