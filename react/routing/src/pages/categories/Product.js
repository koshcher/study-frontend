import { useParams, useSearchParams } from "react-router-dom"

const Product = () => {
  const { brand } = useParams()

  const [searchParams, setSearchParams] = useSearchParams()

  return (
    <h1>Product from {brand} is {searchParams.get('live')}</h1>
  )
}

export default Product