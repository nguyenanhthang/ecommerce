import * as React from 'react';
import { CardProductIFf } from '../../types/Component.type';
import {
    CardBody,
    CardCost,
    CardRating,
    CardTitle,
    CardTitleRaing,
    CardWrapper,
    ImageLink,
    ImageProduct,
    ImgAction
} from './CardProduct.tyled';
import { Box, Rating } from '@mui/material';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import StarIcon from '@mui/icons-material/Star';
import IconsComponent from 'components/Icons/IconsComponent';
import IconsAction from './IconActionAddTocard/IconsAction';
const labels: {
    [index: string]: React.ReactElement;
} = {
    1: <SentimentVeryDissatisfiedIcon color='error' />,
    2: <SentimentDissatisfiedIcon color='error' />,
    3: <SentimentSatisfiedIcon color='warning' />,
    4: <SentimentSatisfiedAltIcon color='success' />,
    5: <SentimentVerySatisfiedIcon color='success' />
};
function getLabelText(value: number) {
    return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}
const CardProduct: React.FC<CardProductIFf> = ({ productImg, productName, productCost, productRating }) => {
    const [value, setValue] = React.useState<number | null>(productRating);
    const [hover, setHover] = React.useState(-1);
    return (
        <CardWrapper>
            <ImageProduct>
                <ImageLink image={`${productImg}`} />
                <ImgAction>
                    <IconsAction />
                </ImgAction>
            </ImageProduct>
            <CardBody>
                <CardTitle>name: {productName}</CardTitle>
                <CardCost>Coast: ₫{productCost}</CardCost>
                <CardRating>
                    <CardTitleRaing>Rating:</CardTitleRaing>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center'
                        }}
                    >
                        <Rating
                            sx={{ fontSize: '1.2rem' }}
                            name='hover-feedback'
                            value={value}
                            precision={1}
                            getLabelText={getLabelText}
                            onChange={(event, newValue) => {
                                setValue(newValue);
                            }}
                            onChangeActive={(event, newHover) => {
                                setHover(newHover);
                            }}
                            emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize='inherit' />}
                        />
                        {value !== null && <Box sx={{ ml: 0.3 }}>{labels[hover !== -1 ? hover : value]}</Box>}
                    </Box>
                </CardRating>
            </CardBody>
        </CardWrapper>
    );
};

export default CardProduct;
