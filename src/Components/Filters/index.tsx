import React, { useState, useEffect, useRef } from 'react';
import FiltersWrapper from '../Filters/styled/FiltersWrapper';
import DropdownOptionsWrapper from '../Filters/styled/DropdownOptionsWrapper';
import DropdownWrapper from '../Filters/styled/DropdownWrapper';
import OpenDropdownButton from '../Filters/styled/OpenDropdownButton';
import SingleFilter from '../SingleFilter';

const Filters = ({ ...props }) => {
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
        setIsSuperOpen(true);
        setIsTypeOpen(false);
        setIsSubOpen(false);
        setIsHpOpen(false);
        break;

      case 'Type':
        setIsSuperOpen(false);
        setIsTypeOpen(true);
        setIsSubOpen(false);
        setIsHpOpen(false);
        break;

      case 'SubType':
        setIsSuperOpen(false);
        setIsTypeOpen(false);
        setIsSubOpen(true);
        setIsHpOpen(false);
        break;

      case 'HP':
        setIsSuperOpen(false);
        setIsTypeOpen(false);
        setIsSubOpen(false);
        setIsHpOpen(true);
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
          <SingleFilter value="Energy" setCurrentType={props.setCurrentSuperType} />
          <SingleFilter value="Pokemon" setCurrentType={props.setCurrentSuperType} />
          <SingleFilter value="Trainer" setCurrentType={props.setCurrentSuperType} />
        </DropdownOptionsWrapper>
      </DropdownWrapper>
      <DropdownWrapper ref={typeRef}>
        <OpenDropdownButton onClick={(e) => closeDropdowns(e)}>Type</OpenDropdownButton>
        <DropdownOptionsWrapper isOpen={isTypeOpen}>
          <SingleFilter value="Colorless" setCurrentType={props.setCurrentType} />
          <SingleFilter value="Darkness" setCurrentType={props.setCurrentType} />
          <SingleFilter value="Dragon" setCurrentType={props.setCurrentType} />
          <SingleFilter value="Fairy" setCurrentType={props.setCurrentType} />
          <SingleFilter value="Fighting" setCurrentType={props.setCurrentType} />
          <SingleFilter value="Fire" setCurrentType={props.setCurrentType} />
          <SingleFilter value="Grass" setCurrentType={props.setCurrentType} />
          <SingleFilter value="Lightning" setCurrentType={props.setCurrentType} />
          <SingleFilter value="Metal" setCurrentType={props.setCurrentType} />
          <SingleFilter value="Psychic" setCurrentType={props.setCurrentType} />
          <SingleFilter value="Water" setCurrentType={props.setCurrentType} />
        </DropdownOptionsWrapper>
      </DropdownWrapper>
      <DropdownWrapper ref={subRef}>
        <OpenDropdownButton onClick={(e) => closeDropdowns(e)}>SubType</OpenDropdownButton>
        <DropdownOptionsWrapper isOpen={isSubOpen}>
          <SingleFilter value="EX" setCurrentType={props.setCurrentSubType} />
          <SingleFilter value="Special" setCurrentType={props.setCurrentSubType} />
          <SingleFilter value="Restored" setCurrentType={props.setCurrentSubType} />
          <SingleFilter value="Level Up" setCurrentType={props.setCurrentSubType} />
          <SingleFilter value="MEGA" setCurrentType={props.setCurrentSubType} />
          <SingleFilter value="Technical Machine" setCurrentType={props.setCurrentSubType} />
          <SingleFilter value="Item" setCurrentType={props.setCurrentSubType} />
          <SingleFilter value="Stadium" setCurrentType={props.setCurrentSubType} />
          <SingleFilter value="Supporter" setCurrentType={props.setCurrentSubType} />
          <SingleFilter value="Stage 1" setCurrentType={props.setCurrentSubType} />
          <SingleFilter value="GX" setCurrentType={props.setCurrentSubType} />
          <SingleFilter value="Pokemon Tool" setCurrentType={props.setCurrentSubType} />
          <SingleFilter value="Basic" setCurrentType={props.setCurrentSubType} />
          <SingleFilter value="LEGEND" setCurrentType={props.setCurrentSubType} />
          <SingleFilter value="Stage 2" setCurrentType={props.setCurrentSubType} />
          <SingleFilter value="BREAK" setCurrentType={props.setCurrentSubType} />
          <SingleFilter value="Rocket's Secret Machine" setCurrentType={props.setCurrentSubType} />
        </DropdownOptionsWrapper>
      </DropdownWrapper>
      <DropdownWrapper ref={hpRef}>
        <OpenDropdownButton onClick={(e) => closeDropdowns(e)}>HP</OpenDropdownButton>
        <DropdownOptionsWrapper isOpen={isHpOpen}>
          <SingleFilter value="LT50" type="radio" setCurrentType={props.setCurrentHp} />
          <SingleFilter value="LT100" type="radio" setCurrentType={props.setCurrentHp} />
          <SingleFilter value="LT150" type="radio" setCurrentType={props.setCurrentHp} />
          <SingleFilter value="GR50" type="radio" setCurrentType={props.setCurrentHp} />
          <SingleFilter value="GR100" type="radio" setCurrentType={props.setCurrentHp} />
          <SingleFilter value="GR150" type="radio" setCurrentType={props.setCurrentHp} />
          <SingleFilter value="GR200" type="radio" setCurrentType={props.setCurrentHp} />
          <SingleFilter value="All" type="radio" setCurrentType={props.setCurrentHp} />
        </DropdownOptionsWrapper>
      </DropdownWrapper>
    </FiltersWrapper>
  );
};

export default Filters;
