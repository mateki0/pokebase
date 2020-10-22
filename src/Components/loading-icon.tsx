import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';

const Spinner = styled.div`
  width: 600px;
  height: auto;
  position: relative;
  margin: 100px auto;
`;
const PokeballLoading = styled.img`
  width: 100%;
`;
const LoadingIcon = () => {
  const myImg = useRef<HTMLImageElement>(null!);
  useEffect(() => {
    gsap.to(myImg.current, { duration: 1.5, ease: 'ease.out', opacity: 0 });
  }, []);

  return (
    <Spinner>
      <PokeballLoading ref={myImg} src="./pokeball.png" />
    </Spinner>
  );
};

export default LoadingIcon;
