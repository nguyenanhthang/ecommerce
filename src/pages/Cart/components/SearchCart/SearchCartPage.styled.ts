import { styled } from '@mui/material/styles';
import { Box, Typography, CardMedia, Button } from '@mui/material';

export const SearchCartPageWrap = styled(Box)`
    display: flex;
    flex-direction: column;
    margin-left: 10px;
`;
export const SearchCartPageHeader = styled(Box)`
    margin-bottom: 40px;
`;
export const SearchCartPageTitle = styled(Typography)`
    font-weight: 600;
`;
export const SearchCartPageSearch = styled(Box)`
    margin-bottom: 40px;
    height: 38px;
`;
export const SearchCartPageTotal = styled(Box)`
    background: #f3f2ee;
    display: flex;
    flex-direction: column;
    padding: 30px;
`;
export const SearchCartPageTotalTitle = styled(Typography)`
    font-weight: 300;
    font-size: 1.2rem;
    margin-bottom: 10px;
`;
export const SearchCartPageSubTotal = styled(Typography)`
    font-size: 1rem;
    color: #444444;
`;
export const SearchCartPageSubTotalCost = styled(Typography)`
    font-weight: 700;
    color: #e53637;
`;
export const SearchCartPageTotalTotal = styled(Typography)`
    color: #444444
    font-size: 1rem;
`;
export const SearchCartPageTotalTotalCost = styled(Typography)`
    font-weight: 700;
    color: #e53637;
`;
