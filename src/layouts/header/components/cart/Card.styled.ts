import { styled } from '@mui/material/styles';
import { Box, List, Typography, ListItem } from '@mui/material';

export const HeaderCartListWrap = styled(Box)`
    width: 100%;
    border-radius: 2px;
    box-shadow: 0 2px 10px #ccc;
    transform-origin: calc(100% - 10px) top;
    cursor: default;
    z-index: 9;
`;
export const HeaderCartTitle = styled(Typography)`
    text-align: center;
    margin: 8px 0 8px 12px;
    font-size: 1.2em;
    color: #999;
`;
export const HeaderCartList = styled(List)`
    padding-left: 0;
    text-decoration: none;
    max-height: 56vh;
    overflow-y: auto;
`;
export const HeaderCartListItem = styled(ListItem)`
    background-color: #f8f8f8;
    &:hover {
        border: 1px solid blue;
    }
`;
export const ButtonCard = styled(Box)`
    padding: 10px 10px;
    font-size: 1rem;
    background: cornflowerblue;
    color: #ffff;
`;
