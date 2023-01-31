import * as React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { Search, SearchIconWrapper, StyledInputBase } from './SearchComponent.styled';

const SearchComponent = () => {
    return (
        <Search>
            <SearchIconWrapper>
                <SearchIcon sx={{ color: '#1976d2' }} />
            </SearchIconWrapper>
            <StyledInputBase placeholder='Search…' type='search' />
        </Search>
    );
};

export default SearchComponent;
