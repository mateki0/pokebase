import React, { useState, useEffect, useRef, useCallback } from 'react';
import FilteredCards from '../Cards';
import Pages from '../Pages';
import FiltersContainer from '../FiltersContainer';
import Header from '../Header';
import { IPokemon } from '../types';
import StyledMain from './styled/StyledMain';
const pokemon = require('pokemontcgsdk');

const Body = () => {
  const inputRef = useRef<HTMLInputElement>(null!);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState<string>('');
  const [type, setType] = useState<string>('');
  const [superType, setSuperType] = useState<string>('');
  const [subType, setSubType] = useState<string>('');
  const [hp, setHp] = useState<string>('');
  const [pokemons, setPokemons] = useState<IPokemon[]>([]);
  const [page, setPage] = useState(1);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(12);
  const setCurrentSuperType = (e: { currentTarget: { value: string; checked: boolean } }) => {
    if (superType === '' && e.currentTarget.checked === true) {
      setSuperType(e.currentTarget.value + '|');
    } else if (e.currentTarget.checked === false) {
      let replaced = superType.replace(e.currentTarget.value + '|', '');
      setSuperType(replaced);
    } else if (superType !== '' && e.currentTarget.checked === true) {
      setSuperType(superType + e.currentTarget.value + '|');
    }
  };

  const setCurrentType = (e: { currentTarget: { value: string; checked: boolean } }) => {
    if (type === '' && e.currentTarget.checked === true) {
      setType(e.currentTarget.value + '|');
    } else if (e.currentTarget.checked === false) {
      let replaced = type.replace(e.currentTarget.value + '|', '');
      setType(replaced);
    } else if (type !== '' && e.currentTarget.checked === true) {
      setType(type + e.currentTarget.value + '|');
    }
  };

  const setCurrentSubType = (e: { currentTarget: { value: string; checked: boolean } }) => {
    if (subType === '' && e.currentTarget.checked === true) {
      setSubType(e.currentTarget.value + '|');
    } else if (e.currentTarget.checked === false) {
      let replaced = subType.replace(e.currentTarget.value + '|', '');
      setSubType(replaced);
    } else if (subType !== '' && e.currentTarget.checked === true) {
      setSubType(subType + e.currentTarget.value + '|');
    }
  };

  const setCurrentHp = (e: { currentTarget: { value: string; checked: boolean } }) => {
    if (e.currentTarget.checked === true && e.currentTarget.value !== 'all') {
      setHp(e.currentTarget.value);
    }
    if (e.currentTarget.value === 'all') {
      setHp('');
    }
  };

  const prevPage = () => {
    setPage(page - 1);
  };
  const nextPage = () => {
    setPage(page + 1);
  };
  const changePage = (e: { currentTarget: { value: string }; key: string }) => {
    if (e.key === 'Enter') {
      let page = parseInt(e.currentTarget.value);
      setPage(page);
    }
  };

  const choosePage = (e: { currentTarget: { innerText: string } }) => {
    let page = parseInt(e.currentTarget.innerText);
    setPage(page);
  };

  useEffect(() => {
    setMin(page * 12 - 12);
    setMax(page * 12);
  }, [page]);
  const fetchDataWithoutQuery = useCallback(async () => {
    try {
      await pokemon.card
        .where({ pageSize: 999, supertype: superType, types: type, subtype: subType, hp: hp })
        .then((cards: React.SetStateAction<IPokemon[]>) => {
          setPokemons(cards);
          setIsLoading(false);
        });
    } catch (error) {
      console.log(error);
    }
  }, [superType, type, subType, hp]);

  const changeQuery = (e: {
    currentTarget: { value: React.SetStateAction<string>; id: string };
    key: string;
  }) => {
    if (e.key === 'Enter' && e.currentTarget.value.length >= 3) {
      setQuery(e.currentTarget.value);
    }
    if (
      e.key === 'Enter' &&
      e.currentTarget.value.length < 3 &&
      e.currentTarget.value.length !== 0
    ) {
      alert('The phrase should be at least 3 letters long');
    }
    if (e.key === 'Enter' && e.currentTarget.value.length === 0) {
      setQuery('');
    }

    if (e.currentTarget.id === 'button' && inputRef && inputRef.current.value.length >= 3) {
      setQuery(inputRef.current.value);
    }
    if (e.currentTarget.id === 'button' && inputRef && inputRef.current.value.length === 0) {
      setQuery('');
    }
    if (
      e.currentTarget.id === 'button' &&
      inputRef &&
      inputRef.current.value.length < 3 &&
      inputRef.current.value.length !== 0
    ) {
      alert('The phrase should be at least 3 letters long');
    }
  };

  const fetchDataWithQuery = useCallback(async () => {
    try {
      await pokemon.card
        .where({ pageSize: 999, supertype: 'pokemon', types: type, subtype: subType, hp: hp })
        .then((cards: IPokemon[]) => {
          let filtered: IPokemon[] = [];
          cards.map((a) => {
            if (a.name.toLowerCase().includes(query)) {
              return filtered.push(a);
            }
          });
          setPokemons(filtered);
          setIsLoading(false);
        });
    } catch (error) {
      console.log(error);
    }
  }, [query, type, subType, hp]);
  useEffect(() => {
    if (query === '') {
      fetchDataWithoutQuery();
    } else {
      fetchDataWithQuery();
    }
  }, []);
  return (
    <StyledMain>
      <Header changeQuery={changeQuery} inputRef={inputRef} />
      <FiltersContainer
        setCurrentSuperType={setCurrentSuperType}
        setCurrentType={setCurrentType}
        setCurrentSubType={setCurrentSubType}
        setCurrentHp={setCurrentHp}
      />
      <FilteredCards pokemons={pokemons} min={min} max={max} isLoading={isLoading}></FilteredCards>
      <Pages
        choosePage={choosePage}
        changePage={changePage}
        prevPage={prevPage}
        nextPage={nextPage}
        length={pokemons.length}
        page={page}
      />
    </StyledMain>
  );
};
export default Body;
