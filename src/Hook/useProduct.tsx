import { useQuery } from '@tanstack/react-query';
import { getProducts } from 'api/Product';
import { productsDetail, getProductsCateGories } from '../api/Product';

export const useProduct = (keyword: any) => {
    return useQuery({
        queryKey: ['getProducts', keyword],
        queryFn: () => getProducts(keyword)
    });
};
export const useDetail = (id: number | string) => {
    return useQuery({
        queryKey: ['getProductsDetail', id],
        queryFn: () => productsDetail(id as number)
    });
};
export const useCategories = (limit: number | string) => {
    return useQuery({
        queryKey: ['getProductsDetailCateGories'],
        queryFn: () => getProductsCateGories(limit)
    });
};
