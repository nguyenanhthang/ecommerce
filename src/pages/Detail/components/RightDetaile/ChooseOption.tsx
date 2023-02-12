import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import {
    ChooseOptionAddToCard,
    ChooseOptionButton,
    ChooseOptionColor,
    ChooseOptionColorTitle,
    ChooseOptionColorWrapper,
    ChooseOptionCost,
    ChooseOptionCount,
    ChooseOptionDescription,
    ChooseOptionHeader,
    ChooseOptionRating,
    ChooseOptionSizeButtonNode,
    ChooseOptionSizeButtonWrapper,
    ChooseOptionSizeTitle,
    ChooseOptionSizeWrapper,
    ChooseOptionStock,
    ChooseOptionTitle,
    ChooseOptionWrapper,
    ColorList,
    ColorsProduct,
    ImportTant
} from './ChooseOption.styled';
import { Rating } from '@mui/material';
import ButtonComponent from 'components/Button/ButtonComponent';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { addCart } from 'features/Product/ProductSlice';

const options = [
    { label: 'The Shawshank Redemption', year: 1994 },
    { label: 'The Godfather', year: 1972 },
    { label: 'The Godfather: Part II', year: 1974 },
    { label: 'The Dark Knight', year: 2008 },
    { label: '12 Angry Men', year: 1957 },
    { label: "Schindler's List", year: 1993 },
    { label: 'Pulp Fiction', year: 1994 }
];
type Props = {
    getDetailProduct: any;
};

const ChooseOption: React.FC<Props> = ({ getDetailProduct }) => {
    const dispatch = useAppDispatch();
    let [count, setCount] = React.useState(1);
    function incrementCount() {
        count = count + 1;
        setCount(count);
    }
    function decrementCount() {
        count = count - 1;
        setCount(count);
    }
    const [value, setValue] = React.useState<number | null>(2);
    const handleAddToCart = (getDetailProduct: any) => {
        dispatch(
            addCart({
                id: getDetailProduct.id,
                product_name: getDetailProduct.product_name,
                product_image: getDetailProduct.product_image,
                quantity: count,
                productPrice: getDetailProduct?.product_price,
                totalPrice: getDetailProduct?.product_price * count
            })
        );
    };
    return (
        <ChooseOptionWrapper xs={12} sm={12} lg={5.5} md={5.5}>
            <ChooseOptionHeader>
                <ChooseOptionTitle variant='h6'>Name: {getDetailProduct?.product_name}</ChooseOptionTitle>
                <ChooseOptionRating>
                    <Rating
                        name='simple-controlled'
                        value={value}
                        onChange={(event, newValue) => {
                            setValue(newValue);
                        }}
                    />
                </ChooseOptionRating>
                <ChooseOptionStock variant='h6'>Stock: Available In Stock</ChooseOptionStock>
                <ChooseOptionCost>Cost: {getDetailProduct?.product_price}</ChooseOptionCost>
            </ChooseOptionHeader>
            <ChooseOptionDescription>{getDetailProduct?.product_short_desc}</ChooseOptionDescription>
            <ChooseOptionColorWrapper>
                <ChooseOptionColorTitle variant='h4'>
                    COLOR <ImportTant variant='caption'>*</ImportTant>
                    <ColorList>
                        <ColorsProduct variant='caption' sx={{ background: '#1cbbb4' }}></ColorsProduct>
                        <ColorsProduct variant='caption' sx={{ background: '#000000' }}></ColorsProduct>
                        <ColorsProduct variant='caption' sx={{ background: '#00aeef' }}></ColorsProduct>
                        <ColorsProduct variant='caption' sx={{ background: '#00a99d' }}></ColorsProduct>
                        <ColorsProduct variant='caption' sx={{ background: '#e7352b' }}></ColorsProduct>
                    </ColorList>
                </ChooseOptionColorTitle>
                <ChooseOptionColor></ChooseOptionColor>
            </ChooseOptionColorWrapper>
            <ChooseOptionSizeWrapper>
                <ChooseOptionSizeTitle variant='h4'>
                    SIZE <ImportTant variant='caption'>*</ImportTant>
                </ChooseOptionSizeTitle>
                <Autocomplete
                    disablePortal
                    id='combo-box-demo'
                    options={options}
                    sx={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label='Movie' />}
                />
                <ChooseOptionSizeButtonWrapper>
                    <ChooseOptionSizeButtonNode>
                        <ChooseOptionButton sx={{ left: '55%' }} onClick={incrementCount}>
                            +
                        </ChooseOptionButton>
                        <ChooseOptionCount>{count}</ChooseOptionCount>
                        <ChooseOptionButton onClick={decrementCount}>-</ChooseOptionButton>
                    </ChooseOptionSizeButtonNode>
                    <ChooseOptionAddToCard onClick={() => handleAddToCart(getDetailProduct)}>
                        ADD To Card
                    </ChooseOptionAddToCard>
                </ChooseOptionSizeButtonWrapper>
            </ChooseOptionSizeWrapper>
        </ChooseOptionWrapper>
    );
};

export default ChooseOption;
