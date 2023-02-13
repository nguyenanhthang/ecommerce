import { styled } from '@mui/material/styles';
import { Box, Typography} from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
export const CheckOutFormWrap = styled(Grid)`
    height: inherit;
`;
export const CheckOutForm = styled(Box)`
    width: 100%;
    border-radius: 0.5rem;
    box-shadow: var(--box-shadow);
    border: 0.1rem solid rgba(0, 0, 0, 0.2);
    background: #fff;
    padding: 1rem;
    margin: 0 auto;
`;
export const CheckOutFormBox = styled(Box)`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 30px;
`;
export const CheckOutFormWrapInput = styled(Box)`
    width: 49%;
`;
export const CheckoutFormText = styled(Typography)`
    display: block;
    padding: 0.5rem 0;
    font-size: 0.7rem;
    color: #666;
`;
