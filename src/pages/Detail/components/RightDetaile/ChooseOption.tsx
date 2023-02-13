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
import { Rating, Typography } from '@mui/material';
import ButtonComponent from 'components/Button/ButtonComponent';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { addCart } from 'features/Product/ProductSlice';

type Props = {
    getDetailProduct: any;
};

const ChooseOption: React.FC<Props> = ({ getDetailProduct }) => {
    const dispatch = useAppDispatch();
    const [toTalPrice, setTotalPrice] = React.useState(Number(getDetailProduct?.data?.product_price));
    let [count, setCount] = React.useState(1);
    const [value, setValue] = React.useState<number | null>(2);
    function incrementCount() {
        count = count + 1;
        setCount(count);
    }
    function decrementCount() {
        count = count - 1;
        setCount(count);
    }
    const handleAddToCart = (getDetailProduct: any) => {
        dispatch(
            addCart({
                id: getDetailProduct.data.id,
                product_name: getDetailProduct.data.product_name,
                product_image: getDetailProduct.data.product_image,
                quantity: count,
                productPrice: toTalPrice,
                totalPrice: toTalPrice * count,
                //size: 
            })
        );
    };
    // const handleTotalPrice = (product: number) => {
    //     setTotalPrice((prev: number) => Number((prev += product)));
    // };
    return (
        <ChooseOptionWrapper xs={12} sm={12} lg={5.5} md={5.5}>
            <ChooseOptionHeader>
                <ChooseOptionTitle variant='h6'>Name: {getDetailProduct.data?.product_name}</ChooseOptionTitle>
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
                <ChooseOptionCost>Cost: {toTalPrice}</ChooseOptionCost>
            </ChooseOptionHeader>
            <ChooseOptionDescription>{getDetailProduct.data?.product_short_desc}</ChooseOptionDescription>
            <ChooseOptionColorWrapper>
                <ChooseOptionColorTitle variant='h4'>
                    COLOR <ImportTant variant='caption'>*</ImportTant>
                    <ColorList>
                        {getDetailProduct?.colors.length !== 0 ? (
                            getDetailProduct?.colors.map((el: any, i: number) => {
                                return (
                                    <ColorsProduct
                                        //onClick={() => handleTotalPrice(el.pivot.price)}
                                        key={i}
                                        variant='caption'
                                        sx={{ background: `${el.attr_value}`, cursor: 'pointer' }}
                                    ></ColorsProduct>
                                );
                            })
                        ) : (
                            <Typography variant='h6' sx={{ color: 'red', fontWeight: '500' }}>
                                NO Option
                            </Typography>
                        )}
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
                    options={getDetailProduct?.size.map((el: any) => {
                        return { label: el.attr_name };
                    })}
                    //onChange={(e, value: any) => handleTotalPrice(value.price)}
                    sx={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label='Size' />}
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
