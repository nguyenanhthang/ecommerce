import styled from 'styled-components';
export const ImageWrapper = styled.div`
    width: 383px;
    height: 487px;
    padding-right: 15px;
    padding-left: 15px;
`;
export const ImageContainer = styled.div`
    width: 100%;
    height: 100%;
`;
export const Image = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-content: center;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
`;
export const ButtonImg = styled.button`
    text-align: center;
    border: none;
    font-weight: 500;
    color: #ffffff;
    padding: 25px 48px;
    background-color: #9f78ff;
`;
export const ButtonImgWrap = styled.div`
    display: flex;
    width: 100%;
    align-content: center;
    justify-content: center;
`;
export const TextImg = styled.span`
    text-transform: uppercase;
    font-family: 'Cinzel', serif;
    color: #ffffff;
`;
export const TextImgWrap = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    height: 85px;
    background-color: rgba(29, 37, 71, 0.5);
`;
