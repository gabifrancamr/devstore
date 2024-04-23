'use client'

import { useCart } from '@/contexts/card-context'

interface ButtonAddToCartProps {
  productId: number
}

export function ButtonAddToCart({ productId }: ButtonAddToCartProps) {
  const { addToCart } = useCart()

  function handleAddToCart() {
    addToCart(productId)
  }
  return (
    <button
      onClick={handleAddToCart}
      type="button"
      className="mt-8 flex h-12 items-center justify-center rounded-full bg-emerald-600 font-semibold text-white"
    >
      Adicionar ao carrinho
    </button>
  )
}
