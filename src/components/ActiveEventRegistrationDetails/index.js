// Write your code here

import './index.css'

const ActiveEventRegistration = props => {
  const {event} = props

  const initailReturn = () => (
    <div className="event">
      <p className="initail">
        Click on an event, to view its registration details
      </p>
    </div>
  )
  const eventYetTORegister = () => (
    <div className="eventyet">
      <img
        className="yetImg"
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png "
        alt="yet to register"
      />
      <p className="textPara">
        A live performance brings so much to your relationship with dance
      </p>
      <button type="button">Register Here</button>
    </div>
  )
  const eventRegisterColsed = () => (
    <div className="eventyet">
      <img
        className="yetImg"
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png "
        alt="registrations closed"
      />
      <h1 className="initail">Registrations Are Closed Now!</h1>
      <p className="textPara">Stay tuned. We will reopen</p>
    </div>
  )

  const eventRedistered = () => (
    <div className="eventreg">
      <img
        className="registeredImg"
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png "
        alt="registered"
      /> 
      <h1 className="textPara">You have already registered for the event</h1>
    </div>
  )

  switch (event) {
    case 'REGISTRATIONS_CLOSED':
      return eventRegisterColsed()
    case 'REGISTERED':
      return eventRedistered()
    case 'YET_TO_REGISTER':
      return eventYetTORegister()

    default:
      return initailReturn()
  }
}

export default ActiveEventRegistration
