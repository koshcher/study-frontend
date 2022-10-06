import Picture from "../../components/Picture"
import pictures from "../../utils/pictures"

const MostPopularPicture = () => {
  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>Most popular picture:</h2>
      <Picture pic={pictures.find(pic => pic.name == "The Drunkenness of Noah")} />
    </div>
  )
}

export default MostPopularPicture