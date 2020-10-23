import React from 'react';
import Filters from '../Filters';
import { IFilterSetters } from '../types';

const FiltersContainer = ({
  setCurrentSuperType,
  setCurrentType,
  setCurrentSubType,
  setCurrentHp,
}: IFilterSetters) => {
  return (
    <Filters
      setCurrentSuperType={setCurrentSuperType}
      setCurrentType={setCurrentType}
      setCurrentSubType={setCurrentSubType}
      setCurrentHp={setCurrentHp}
    />
  );
};

export default FiltersContainer;
