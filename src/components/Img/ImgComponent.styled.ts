import styled from 'styled-components';

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
    padding: 20px 48px;
    background-color: #9f78ff;
    border-radius: 4px;
    cursor: pointer;
    transition: 1.5s ease-in-out;
    font-size: 1.3rem;
    font-weight: 500;
    &:hover {
        background: #0056b3;
    }
`;
export const ButtonImgWrap = styled.div`
    display: flex;
    width: 100%;
    align-content: center;
    justify-content: center;
    transition: 0.8s;
    opacity: 0;
    visibility: hidden;
`;
export const TextImg = styled.span`
    text-transform: uppercase;
    font-family: 'Cinzel', serif;
    color: #ffffff;
    font-size: 2.5rem;
`;
export const TextImgWrap = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    height: 85px;
    background-color: rgba(29, 37, 71, 0.5);
    transition: 0.5s;
    opacity: 0;
    visibility: hidden;
`;
export const ImageWrapper = styled.div`
    min-width: 310px;
    min-height: 487px;
    padding-right: 15px;
    padding-left: 15px;
    margin: 10px 0;
    &:hover ${ButtonImgWrap} {
        transition-delay: 0.2s;
        opacity: 1;
        visibility: visible;
    }
    &:hover ${TextImgWrap} {
        transition-delay: 0.2s;
        opacity: 1;
        visibility: visible;
    }
`;
