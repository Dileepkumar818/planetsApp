// Write your code here
import './index.css'

const PlanetItem = props => {
  const {planetDetails} = props
  const {description, imageUrl, name} = planetDetails

  return (
    <div className="planet-container">
      <img src={imageUrl} alt={`planet ${name}`} className="image" />
      <p className="description">{description}</p>
      <h1 className="name">{name}</h1>
    </div>
  )
}

export default PlanetItem
