import React, { useEffect, useState } from 'react'

export const useGetSingleProduct = (productId: any) => {
  const [SingleProduct, setSingleProduct] = useState<any | null>(null)

  useEffect(() => {
    fetchSingleProduct();
  }, [])

  const fetchSingleProduct = async () => {
    const data = await fetch(`https://fakestoreapi.com/products/${productId}`)
    const resData = await data.json()
    setSingleProduct(resData)
  }

  return SingleProduct
}
