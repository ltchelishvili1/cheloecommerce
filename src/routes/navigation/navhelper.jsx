import React from 'react'


import { GrSearch } from 'react-icons/gr'
import FormInput from '../../components/form-input/form-input.component'


const NavHelper = ({handleChange, search}) => {
  return (
    <FormInput
    label="SEARCH"
    type="search"
    onChange={handleChange}
    name="search"
    value={search}
    symbol={
      <GrSearch
        style={{ zoom: "1.2", opacity: ".5", cursor: "pointer" }}
      />
    }
  />

  )
}

export default NavHelper