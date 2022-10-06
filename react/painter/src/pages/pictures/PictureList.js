import pictures from "../../utils/pictures"
import { Link } from 'react-router-dom'

const PictureList = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', margin: '55px' }}>
      {pictures.map(pic =>
        <div>
          <Link to={`/pictures/${pic.name}`}>{pic.name}</Link>
        </div>
      )}
    </div>
  )
}

export default PictureList