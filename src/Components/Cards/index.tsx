import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import LoadingIcon from '../loading-icon';
import CardsList from './styled/CardsList';
import CardImg from './styled/CardImg';
import SingleCardItem from './styled/SingleCardItem';
import { IFilteredCards } from '../types';
import CardsWrapper from './styled/CardsWrapper';

interface ICard {
  id: string;
  imageUrl: string;
  imageUrlHiRes: string;
}

const FilteredCards = ({ pokemons, min, max, isLoading }: IFilteredCards) => {
  const eachPage = pokemons.slice(min, max);
  const myElements: any[] = [];
  useEffect(() => {
    let tl = gsap.timeline();
    gsap.config({
      nullTargetWarn: false,
    });
    tl.fromTo(myElements, { opacity: 0 }, { duration: 1, opacity: 1, stagger: 0.2 });
  }, [myElements]);
  if (!isLoading) {
    return (
      <CardsWrapper>
        <CardsList>
          {eachPage.map((a: ICard, index: number) => (
            <SingleCardItem key={index} ref={(li) => (myElements[index] = li)}>
              <CardImg src={a.imageUrl} />
            </SingleCardItem>
          ))}
        </CardsList>
      </CardsWrapper>
    );
  }
  return <LoadingIcon />;
};

export default FilteredCards;
