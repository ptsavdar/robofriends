import React from 'react';


const SearchBox = ({searchChange}) =>
  <div className={'pa2'}>
    <input
      className={'pa3 ba b--green bg-lightest-blue'}
      type={'search'}
      placeholder={'search robots'}
      onChange={searchChange}
    />
  </div>;

export {
  SearchBox
}