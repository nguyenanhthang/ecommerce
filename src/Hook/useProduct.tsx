import { useQuery } from '@tanstack/react-query';
import { getProducts } from 'api/Product';
import { productsDetail, getProductsCateGories } from '../api/Product';

export const useProduct = () => {
    return useQuery({
        queryKey: ['getProducts'],
        queryFn: () => getProducts()
    });
};
export const useDetail = (id: number | string) => {
    return useQuery({
        queryKey: ['getProductsDetail', id],
        queryFn: () => productsDetail(id as number)
    });
};
export const useCategories = (limit: number) => {
    return useQuery({
        queryKey: ['getProductsDetail', limit],
        queryFn: () => getProductsCateGories(limit)
    });
};
