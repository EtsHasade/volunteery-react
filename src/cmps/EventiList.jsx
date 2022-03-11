

import { NavLink } from 'react-router-dom'
import EventiPreview from './EventiPreview'

const EventiList = ({ eventis }) => {
    return (
    <section>
        {eventis && <ul className={'eventi-list clean-list card-list'}>
         { eventis.map((eventi, idx) => <EventiPreview key={eventi._id} eventi={eventi} isEventiAdmin={false}/>)}
          <li></li>
          <li></li>
        </ul> || <div className="no-eventi">No eventi</div>}
      </section>)
}

export default EventiList

