
import { NavLink } from 'react-router-dom'
import logo from '../../assets/logo2.svg';
import NavBar from './NavBar';


const AppHeader = ({ routes }) => {

    return (
        // <header className="app-header full main-container" :className="{scrolly:(scrollYposition > 20)}">
        <header className="app-header full main-container" >
        <div className="hedear-container flex space-between">
          <div className="logo">
            <img
              src={logo}
              alt="Volunteery"
              className="logo-img hover-pointer"
            />
          </div>
          {/* <NavMenu className="nav-bar-horizontal"></NavMenu> */}
          <NavBar routes={routes} />
          {/* <nav-bar-vertical className="nav-bar-vertical"></nav-bar-vertical> */}
        </div>
      </header>

    )
}

export default AppHeader
