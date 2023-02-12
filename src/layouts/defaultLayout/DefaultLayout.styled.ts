import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
import { deviceComponents } from './../../Hook/useDevice';
export const WrapperLayout = styled(Box)`
    display: flex;
    flex-direction: column;
    width: 100vw;
`;
export const ContainerLayout = styled(Box)`
    margin-top: 88px;
    @media screen and ${deviceComponents.tablet} {
        margin-top: 46px;
    }
`;
