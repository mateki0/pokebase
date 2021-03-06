import React, { useState, useEffect, useRef } from 'react';
import FiltersWrapper from '../Filters/styled/FiltersWrapper';
import DropdownOptionsWrapper from '../Filters/styled/DropdownOptionsWrapper';
import DropdownWrapper from '../Filters/styled/DropdownWrapper';
import OpenDropdownButton from '../Filters/styled/OpenDropdownButton';
import SingleFilter from '../SingleFilter';
import { IFilterSetters } from '../types';
const Filters = ({
  setCurrentSuperType,
  setCurrentType,
  setCurrentSubType,
  setCurrentHp,
}: IFilterSetters) => {
  const [isSuperOpen, setIsSuperOpen] = useState(false);
  const [isTypeOpen, setIsTypeOpen] = useState(false);
  const [isSubOpen, setIsSubOpen] = useState(false);
  const [isHpOpen, setIsHpOpen] = useState(false);
  const superRef = useRef<HTMLDivElement>(null!);
  const typeRef = useRef<HTMLDivElement>(null!);
  const subRef = useRef<HTMLDivElement>(null!);
  const hpRef = useRef<HTMLDivElement>(null!);

  const closeDropdowns = (e: { currentTarget: { innerText: string } }) => {
    switch (e.currentTarget.innerText) {
      case 'SuperType':
        isSuperOpen ? setIsSuperOpen(false) : setIsSuperOpen(true);
        setIsTypeOpen(false);
        setIsSubOpen(false);
        setIsHpOpen(false);
        break;

      case 'Type':
        setIsSuperOpen(false);
        isTypeOpen ? setIsTypeOpen(false) : setIsTypeOpen(true);
        setIsSubOpen(false);
        setIsHpOpen(false);
        break;

      case 'SubType':
        setIsSuperOpen(false);
        setIsTypeOpen(false);
        isSubOpen ? setIsSubOpen(false) : setIsSubOpen(true);
        setIsHpOpen(false);
        break;

      case 'HP':
        setIsSuperOpen(false);
        setIsTypeOpen(false);
        setIsSubOpen(false);
        isHpOpen ? setIsHpOpen(false) : setIsHpOpen(true);
        break;
    }
  };
  const handleClickOutside = (e: any) => {
    if (superRef && typeRef && subRef && hpRef) {
      if (
        !superRef.current.contains(e.target) &&
        !typeRef.current.contains(e.target) &&
        !subRef.current.contains(e.target) &&
        !hpRef.current.contains(e.target)
      ) {
        setIsSuperOpen(false);
        setIsTypeOpen(false);
        setIsSubOpen(false);
        setIsHpOpen(false);
      }
    }
  };
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  return (
    <FiltersWrapper>
      <DropdownWrapper ref={superRef}>
        <OpenDropdownButton onClick={(e) => closeDropdowns(e)}>SuperType</OpenDropdownButton>
        <DropdownOptionsWrapper isOpen={isSuperOpen}>
          <SingleFilter value="Energy" setCurrentType={setCurrentSuperType} />
          <SingleFilter value="Pokemon" setCurrentType={setCurrentSuperType} />
          <SingleFilter value="Trainer" setCurrentType={setCurrentSuperType} />
        </DropdownOptionsWrapper>
      </DropdownWrapper>
      <DropdownWrapper ref={typeRef}>
        <OpenDropdownButton onClick={(e) => closeDropdowns(e)}>Type</OpenDropdownButton>
        <DropdownOptionsWrapper isOpen={isTypeOpen}>
          <SingleFilter value="Colorless" setCurrentType={setCurrentType} />
          <SingleFilter value="Darkness" setCurrentType={setCurrentType} />
          <SingleFilter value="Dragon" setCurrentType={setCurrentType} />
          <SingleFilter value="Fairy" setCurrentType={setCurrentType} />
          <SingleFilter value="Fighting" setCurrentType={setCurrentType} />
          <SingleFilter value="Fire" setCurrentType={setCurrentType} />
          <SingleFilter value="Grass" setCurrentType={setCurrentType} />
          <SingleFilter value="Lightning" setCurrentType={setCurrentType} />
          <SingleFilter value="Metal" setCurrentType={setCurrentType} />
          <SingleFilter value="Psychic" setCurrentType={setCurrentType} />
          <SingleFilter value="Water" setCurrentType={setCurrentType} />
        </DropdownOptionsWrapper>
      </DropdownWrapper>
      <DropdownWrapper ref={subRef}>
        <OpenDropdownButton onClick={(e) => closeDropdowns(e)}>SubType</OpenDropdownButton>
        <DropdownOptionsWrapper isOpen={isSubOpen}>
          <SingleFilter value="EX" setCurrentType={setCurrentSubType} />
          <SingleFilter value="Special" setCurrentType={setCurrentSubType} />
          <SingleFilter value="Restored" setCurrentType={setCurrentSubType} />
          <SingleFilter value="Level Up" setCurrentType={setCurrentSubType} />
          <SingleFilter value="MEGA" setCurrentType={setCurrentSubType} />
          <SingleFilter value="Technical Machine" setCurrentType={setCurrentSubType} />
          <SingleFilter value="Item" setCurrentType={setCurrentSubType} />
          <SingleFilter value="Stadium" setCurrentType={setCurrentSubType} />
          <SingleFilter value="Supporter" setCurrentType={setCurrentSubType} />
          <SingleFilter value="Stage 1" setCurrentType={setCurrentSubType} />
          <SingleFilter value="GX" setCurrentType={setCurrentSubType} />
          <SingleFilter value="Pokemon Tool" setCurrentType={setCurrentSubType} />
          <SingleFilter value="Basic" setCurrentType={setCurrentSubType} />
          <SingleFilter value="LEGEND" setCurrentType={setCurrentSubType} />
          <SingleFilter value="Stage 2" setCurrentType={setCurrentSubType} />
          <SingleFilter value="BREAK" setCurrentType={setCurrentSubType} />
          <SingleFilter value="Rocket's Secret Machine" setCurrentType={setCurrentSubType} />
        </DropdownOptionsWrapper>
      </DropdownWrapper>
      <DropdownWrapper ref={hpRef}>
        <OpenDropdownButton onClick={(e) => closeDropdowns(e)}>HP</OpenDropdownButton>
        <DropdownOptionsWrapper isOpen={isHpOpen}>
          <SingleFilter value="LT50" type="radio" setCurrentType={setCurrentHp} />
          <SingleFilter value="LT100" type="radio" setCurrentType={setCurrentHp} />
          <SingleFilter value="LT150" type="radio" setCurrentType={setCurrentHp} />
          <SingleFilter value="GR50" type="radio" setCurrentType={setCurrentHp} />
          <SingleFilter value="GR100" type="radio" setCurrentType={setCurrentHp} />
          <SingleFilter value="GR150" type="radio" setCurrentType={setCurrentHp} />
          <SingleFilter value="GR200" type="radio" setCurrentType={setCurrentHp} />
          <SingleFilter value="All" type="radio" setCurrentType={setCurrentHp} />
        </DropdownOptionsWrapper>
      </DropdownWrapper>
    </FiltersWrapper>
  );
};

export default Filters;
