import { styled, alpha } from '@mui/material/styles';
import { Box, InputBase } from '@mui/material';
export const Search = styled(Box)(({ theme }) => ({
    position: 'relative',
    border: '1px solid #1976d2',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing(1),
    marginLeft: 0,
    width: '100%',
    height: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto'
    }
}));

export const SearchIconWrapper = styled(Box)(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.down('md')]: {
            width: '20ch',
            height: '2ch',
            padding: '16px 1px 9px 45px'
        },
        [theme.breakpoints.down('sm')]: {
            width: '10ch',
            height: '2ch',
            padding: '15px 1px 1px 45px'
        }
    }
}));
