import { styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';
export const ContainerFooter = styled(Box)`
    padding: 80px 60px;
    background: #1d2547;
    @media (max-width: 1000px) {
        padding: 70px 30px;
    }
`;

export const WrapperFooter = styled(Box)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1000px;
    margin: 0 auto;
    /* background: red; */
`;

export const ColumnFooter = styled(Box)`
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-left: 60px;
`;

export const RowFooter = styled(Box)`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
    grid-gap: 20px;

    @media (max-width: 1000px) {
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    }
`;

export const LinkFooter = styled(Typography)`
    color: #fff;
    margin-bottom: 20px;
    font-size: 18px;
    text-decoration: none;
    cursor: pointer;
    &:hover {
        color: #ff9c00;
        transition: 200ms ease-in;
    }
`;

export const TitleFooter = styled(Typography)`
    font-size: 24px;
    color: #fff;
    margin-bottom: 40px;
    font-weight: bold;
`;
