import React from 'react';
import FilterLabel from './styled/FilterLabel';
import FilterWrapper from './styled/FilterWrapper';

const SingleFilter = ({ ...props }) => {
  return (
    <FilterWrapper>
      <FilterLabel>
        {props.value}
        <input
          value={props.value}
          type={props.type ? props.type : 'checkbox'}
          onChange={(e) => props.setCurrentType(e)}
        />
      </FilterLabel>
    </FilterWrapper>
  );
};

export default SingleFilter;
