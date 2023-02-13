import { styled } from '@mui/material/styles';
import { Box, Typography, Button } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2';
export const ChooseOptionWrapper = styled(Grid2)`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`;
export const ChooseOptionHeader = styled(Box)`
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid #d6d6d6;
`;
export const ChooseOptionTitle = styled(Typography)`
    font-weight: 600;
    color: #000;
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    padding-bottom: 13px;
`;
export const ChooseOptionRating = styled(Box)``;
export const ChooseOptionStock = styled(Typography)`
    font-weight: 500;
    font-size: 14px;
    font-family: 'Poppins', sans-serif;
    color: #666666;
    padding: 5px 0px 10px 0px;
`;
export const ChooseOptionCost = styled(Typography)`
    font-size: 24px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    color: #000;
    padding-bottom: 15px;
`;
export const ChooseOptionDescription = styled(Typography)`
    font-size: 13px;
    font-family: 'Poppins', sans-serif;
    line-height: 24px;
    color: #666666;
    letter-spacing: 0.325px;
    border-bottom: 1px solid #d6d6d6;
    padding: 16px 0px;
    max-width: 460px;
    margin-top: 10px;
`;
export const ChooseOptionColorWrapper = styled(Box)`
    max-width: 460px;
    margin-top: 22px;
`;
export const ImportTant = styled(Typography)`
    color: red;
    font-size: 2rem;
`;
export const ChooseOptionColorTitle = styled(Typography)`
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    color: #000;
    padding-bottom: 15px;
`;
export const ColorList = styled(Box)`
    display: flex;
    align-content: center;
    gap: 10px;
`;
export const ColorsProduct = styled(Typography)`
    height: 28px;
    width: 28px;
    border-radius: 50%;
    display: inline-block;
`;
export const ChooseOptionColor = styled(Box)``;
export const ChooseOptionSizeWrapper = styled(Box)`
    max-width: 460px;
    margin-top: 22px;
`;
export const ChooseOptionSizeTitle = styled(Typography)`
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    color: #000;
    padding-bottom: 15px;
`;
export const ChooseOptionSizeButtonWrapper = styled(Box)`
    padding-top: 15px;
    gap: 20px;
    display: flex;
    align-items: center;
`;
export const ChooseOptionSizeButtonNode = styled(Box)`
    display: flex;
    position: relative;
`;
export const ChooseOptionButton = styled(Button)`
    padding: 0px;
    border: none;
    background: transparent;
    outline: none !important;
    box-shadow: none !important;
    font-size: 18px;
    color: #000;
    cursor: pointer;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
`;
export const ChooseOptionCount = styled(Typography)`
    height: 50px;
    width: 150px;
    padding: 0px 20px;
    text-align: center;
    font-size: 16px;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    color: #000;
    letter-spacing: 0.4px;
    border: 1px solid #cccccc;
    outline: none;
    line-height: 2.9;
    box-shadow: none;
`;
export const ChooseOptionAddToCard = styled(Button)`
    background: #262121;
    color: #fff;
    line-height: 38px;
    border: 1px solid #262121;
    display: inline-block;
    font-size: 14px;
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 0.7px;
    padding: 0px 15px;
    transition: all 400ms linear 0s;
    font-family: 'Poppins', sans-serif;
`;
