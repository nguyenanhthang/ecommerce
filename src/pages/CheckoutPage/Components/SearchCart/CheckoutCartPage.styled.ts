import { styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
export const CheckoutCartPageWrap = styled(Grid)`
    display: flex;
    flex-direction: column;
    width: auto;
`;
export const CheckoutCartPageHeader = styled(Box)`
    margin-bottom: 40px;
`;
export const CheckoutCartPageTitle = styled(Typography)`
    font-weight: 600;
`;
export const CheckoutCartPageCheckout = styled(Box)`
    margin-bottom: 40px;
    height: 38px;
`;
export const CheckoutCartPageTotal = styled(Box)`
    background: #f3f2ee;
    display: flex;
    flex-direction: column;
    padding: 30px;
`;
export const CheckoutCartPageTotalTitle = styled(Typography)`
    font-weight: 300;
    font-size: 1.2rem;
    margin-bottom: 10px;
`;
export const CheckoutCartPageSubTotal = styled(Typography)`
    font-size: 1rem;
    color: #444444;
`;
export const CheckoutCartPageSubTotalCost = styled(Typography)`
    font-weight: 700;
    color: #e53637;
`;
export const CheckoutCartPageTotalTotal = styled(Typography)`
    color: #444444
    font-size: 1rem;
`;
export const CheckoutCartPageTotalTotalCost = styled(Typography)`
    font-weight: 700;
    color: #e53637;
`;
