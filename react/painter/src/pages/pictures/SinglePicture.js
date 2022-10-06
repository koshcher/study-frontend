import { useParams } from "react-router-dom"
import Picture from "../../components/Picture"
import pictures from "../../utils/pictures"


const SinglePicture = () => {
  const { name } = useParams()

  return (
    <div>
      <Picture pic={pictures.find(pic => pic.name == name)} />
    </div>
  )
}

export default SinglePicture