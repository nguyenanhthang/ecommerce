import { styled } from '@mui/material/styles';
import { Button, Typography } from '@mui/material';
export const ButtonWrapper = styled(Button)`
    display: flex;
    align-content: center;
    justify-content: center;
    padding-left: 5px;
    padding-right: 5px;
    cursor: pointer;
`;
export const IconsWrapper = styled(Typography)`
    margin-right: 4px;
`;
export const TexButton = styled(Typography)`
    color: #000;
    font-size: 0.8rem;
    &:hover {
        color: black;
    }
`;
