// Write your code here
import './index.css'

const EventItem = props => {
  const {obj, eventTrigger} = props
  const {imageUrl, name, location, registrationStatus} = obj
  const clickImg = () => {
    eventTrigger(registrationStatus)
  }

  return (
    <li>
      <button type="button" id="btnList">
        <img
          src={imageUrl}
          className="ImgEvent"
          alt="event"
          onClick={clickImg}
        />
      </button>
      <div className="text">
        {' '}
        <p>{name}</p>
        <p>{location}</p>
      </div>
    </li>
  )
}

export default EventItem
