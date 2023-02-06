import React from 'react';
import {
    FilterList,
    FilterListItem,
    FilterSection,
    FilterSectionControlItem,
    FilterSectionControlList,
    FilterSectionNumber,
    FilterSectionNumberCurrent,
    FilterSectionPage,
    FilterSectionPrice,
    SelectFilter,
    ToolButton,
    ToolContainer,
    ToolLabel,
    ToolWrapper
} from './Tool.styled';
import { ExpandMore, NavigateNext, KeyboardArrowLeft } from '@mui/icons-material';

type Props = {};

const Tool = (props: Props) => {
    return (
        <ToolWrapper>
            <ToolContainer>
                <ToolLabel>xắp sếp theo</ToolLabel>
                <ToolButton>Phổ biến</ToolButton>
                <ToolButton>Mới nhất</ToolButton>
                <ToolButton>Bán chạy</ToolButton>
                <SelectFilter>
                    <FilterSection>
                        <FilterSectionPrice>Price</FilterSectionPrice>
                        <ExpandMore />
                        <FilterList>
                            <FilterListItem>Giá: Cao đến thấp</FilterListItem>
                            <FilterListItem>Giá: Thấp đến cao</FilterListItem>
                        </FilterList>
                    </FilterSection>
                    <FilterSectionPage>
                        <FilterSectionNumber>
                            <FilterSectionNumberCurrent variant='caption'>1/14</FilterSectionNumberCurrent>
                        </FilterSectionNumber>
                        <FilterSectionControlList>
                            <FilterSectionControlItem>
                                <KeyboardArrowLeft />
                            </FilterSectionControlItem>
                            <FilterSectionControlItem>
                                <NavigateNext />
                            </FilterSectionControlItem>
                        </FilterSectionControlList>
                    </FilterSectionPage>
                </SelectFilter>
            </ToolContainer>
        </ToolWrapper>
    );
};

export default Tool;
