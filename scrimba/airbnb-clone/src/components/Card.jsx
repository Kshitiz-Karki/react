import PropTypes from 'prop-types';

const Card = ({ card }) => {
  
  const { coverImg, stats, location, title, price, openSpots } = card

  let badgeText
  if(openSpots === 0) {
    badgeText = 'SOLD OUT'
  } else if (location === 'Online') {
    badgeText = 'ONLINE'
  }

  return (
    <article className="card">
      {badgeText && <div className='card--badge'>{badgeText}</div>}
      <figure>
        <img src={`../../public/images/${coverImg}`} alt="image of Katie Zaferes" width={264} height={353} className="card--img"/>
        <figcaption className="card--stats">
          <span><img src="../../public/images/star.png" alt="star image" className="star" /></span>
          <span className="stats dark">{stats.rating}<span className="stats grey">({stats.reviewCount}) • {location}</span></span>
        </figcaption>
      </figure>
      <h2>{title}</h2>
      <p><span className="bold">From ${price}</span> / person</p>
    </article>
  )
}

Card.propTypes = {
  card: PropTypes.shape({
  coverImg: PropTypes.string,
  location: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    rating: PropTypes.number,
    reviewCount: PropTypes.number,
  }).isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  openSpots: PropTypes.number.isRequired
})

};

export default Card