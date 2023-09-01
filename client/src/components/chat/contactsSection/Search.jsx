import React from "react";
import {InputBase , Box ,styled } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBox = styled(Box)`
    width:100%;
    height:5rem;
    padding:0rem 1rem;
    position:relative;
    display:flex;
    align-items:center;
    backgound-color:white;
    border-bottom:1px solid #f1f1f1;

`
const InputBox = styled(Box)`
    background-color:#ededed;
    border-radius:10px;
    display:flex;
    align-items:center;
    width:100%;
    height:3.5rem;

`
const SearchBar = styled(InputBase)`
    font-size:1.4rem;
    padding-left: 4rem;  
    width:100%;
`
const IconBox = styled(Box)`
    margin-left:2rem;

`
const Search = () => {
  return (
      <SearchBox>

        <InputBox>
            <IconBox>
                <SearchIcon fontSize="large"/>
            </IconBox>
          <SearchBar placeholder="Search or Start a new Chat"/>
        </InputBox>

      </SearchBox>
  );
};

export default Search;
