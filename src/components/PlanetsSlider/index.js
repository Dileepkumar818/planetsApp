// Write your code here
import Slider from 'react-slick'

import PlanetItem from '../PlanetItem'

import './index.css'

const PlanetsSlider = props => {
  const {planetsList} = props
  const settings = {
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  console.log(planetsList)

  return (
    <div className="slider-container" data-testid="planets">
      <h1 className="head">Planets</h1>
      <Slider {...settings}>
        {planetsList.map(item => (
          <PlanetItem key={item.id} planetDetails={item} />
        ))}
      </Slider>
    </div>
  )
}

export default PlanetsSlider
