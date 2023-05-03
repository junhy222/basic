import React, { useEffect, useState } from 'react';

export default function useProducts( {salesOnly} ) {

    const [isLoding, setIsLoding] = useState(false);
    const [isError, setIsError] = useState(false);
    const [products, setProducts] = useState([]);
    console.log("커스텀 훅을 부릅니다.");
    useEffect(() => {
        setIsLoding(true);
        fetch(`data/${salesOnly ? 'sale_' : ''}products.json`)
            .then((res) => res.json())
            .then((data) => {
            console.log('🔥뜨끈한 데이터를 네트워크에서 받아옴');
            setProducts(data);
            })
            .catch(e => {
            // setIsError(true);
            console.log(e);
            })
            .finally(()=>{
            setIsLoding(false);
            });
        return () => {
            // console.log('🧹 깨끗하게 청소하는 일들을 합니다.');
        };
    }, [salesOnly]);
    console.log(isLoding, products);
    return [isLoding, isError, products];
}