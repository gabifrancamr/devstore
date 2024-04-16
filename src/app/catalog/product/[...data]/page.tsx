import { Button } from '@/components/button'

interface ProductProps {
  params: {
    data: string[]
  }
}

export default async function Product({ params }: ProductProps) {
  await new Promise((resolve) => setTimeout(resolve, 2000))
  const [productId, size, color] = params.data
  console.log(params)

  return (
    <div>
      <p>Product: {productId}</p>
      <p>Size: {size}</p>
      <p>Color: {color}</p>

      <Button />
    </div>
  )
}
