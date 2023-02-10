import styled from '@emotion/styled/macro';
import { Box, Button, List, ListItem, Typography } from '@mui/material';
export const ToolWrapper = styled(Box)`
    width: 100%;
`;
export const ToolContainer = styled(Box)`
    display: flex;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.03);
    width: 100%;
    padding: 8px 22px;
    border-radius: 2px;
`;
export const ToolLabel = styled(Typography)`
    font-size: 1.4rem;
    color: #555;
    margin-right: 16px;
    width: inherit;
`;

export const ToolButton = styled(Button)`
    min-width: 97px;
    margin-right: 12px;
`;

export const SelectFilter = styled(Box)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;


export const FilterSectionPrice = styled(Typography)`
    font-size: 1.2rem;
    font-weight: 100;
    cursor: pointer;
`;
export const FilterList = styled(List)`
    position: absolute;
    left: 0;
    right: 0;
    top: 77%;
    border-radius: 2px;
    background-color: #ffff;
    padding: 8px 16px;
    list-style: none;
    display: none;
    z-index: 2;
    width: 180px;
    cursor: pointer;
`;
export const FilterSection = styled(Box)`
    display: flex;
    position: relative;
    &:hover {
        ${FilterList} {
            display: block;
        }
    }
`;
export const FilterListItem = styled(ListItem)`
    font-size: 1.1rem;
    text-decoration: none;
    display: block;
    padding: 5px 0;
    &:hover {
        color: #8acbe9;
    }
`;

export const FilterSectionPage = styled(Box)`
    display: flex;
    align-items: self-start;
`;
export const FilterSectionNumber = styled(Typography)`
    font-size: 1.4rem;
    margin: 0 5px 0 22px;
`;
export const FilterSectionNumberCurrent = styled(Typography)``;
export const FilterSectionControlList = styled(List)`
    border-radius: 2px;
    display: flex;
    width: 72px;
    height: 36px;
`;
export const FilterSectionControlItem = styled(ListItem)`
    padding: 10px;
    background-color: #ffff;
    text-decoration: none;
    border: 1px solid #dfdfdf;
    cursor: pointer;
    &:hover {
        background-color: #8acbe9;
    }
`;
