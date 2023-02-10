import * as React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { Search, SearchIconWrapper, StyledInputBase } from './SearchComponent.styled';

interface Props {
    onChange?: (e: any) => void;
    onKeyDown?: any;
}
const SearchComponent = ({ onChange, onKeyDown }: Props) => {
    return (
        <Search component='form' onSubmit={onKeyDown}>
            <SearchIconWrapper>
                <SearchIcon sx={{ color: '#1976d2' }} />
            </SearchIconWrapper>
            <StyledInputBase onChange={onChange} placeholder='Search…' type='search' />
        </Search>
    );
};

export default SearchComponent;
