import "./EventsMenu.css"

const EventsMenu = ({onClick}) => {
  return (
    <>
    <div className="menu-button" onClick={() => {
      console.log('Menu button clicked');
      onClick() ;
    }} >
        <div className="menu-line"></div>
        <div className="menu-line"></div>
        <div className="menu-line"></div>
      </div>
    </>
      
  )
}

export default EventsMenu