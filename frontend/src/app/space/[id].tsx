'use client'

import { useSearchParams } from 'next/navigation'

export const Space = () => {
    const searchParams = useSearchParams();

    const id = searchParams.get('id');

    return (
        <div>
            <h1>Product Details</h1>
            <p>ID: {id}</p>
        </div>
    );
};