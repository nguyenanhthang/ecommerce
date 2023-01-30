import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
export const InputWrapper = styled(TextField)`
    height: ${(props: any) => props.inputProps.style.height}%;
    width: ${(props: any) => props.inputProps.style.width}%;
    #Login-label {
        font-size: small;
        line-height: normal;
    }
    legend {
        font-size: 0.6rem;
    }
`;
