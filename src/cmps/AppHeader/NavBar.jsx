
import { Fragment } from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = ({ loggedinUser }) => {
    return (
        <ul className={'el-menu-demo nav-bar-horizontal el-menu--horizontal el-menu clean-list flex'}
            default-active="activeIndex"
            mode="horizontal"
            router="true"
        >
            <li className={'el-menu-item'} index="/eventi-app">Volunteerings</li>
            <li className={'el-menu-item'} index="/org-app">Organizations</li>
            {loggedinUser?.org && <li className={'el-menu-item'} index="/eventi-edit">
                Publish new Event
            </li>
                || <li className={'el-menu-item'} v-else index="/org-edit">I need volunteers</li>}

            <li className={'el-submenu user-menu'} index="2">
                <div className={"el-submenu__title"}>
                    {loggedinUser?.imgUrl && <img src={"loggedinUser.imgUrl"} alt="" />
                        || <span >
                            <i style={{ fontSize: '25px' }} className="fas fa-user-circle"></i>
                        </span>}
                    <i className={"el-submenu__icon-arrow el-icon-arrow-down"}></i>

                </div>
                <div className='el-menu--horizontal'>
                    <ul className='el-menu--popup el-menu--popup-bottom-start' >
                        <li className={`el-menu-item`}  index={"`/user-details/${userId}`"} hidden={!loggedinUser}>
                            User profile
                        </li>
                        <li className={'el-menu-item'} v-if="loggedinUser" onClick="logout">Logout</li>
                        <li className={'el-menu-item'} v-if="!loggedinUser" index="/login">Login</li>
                        <li className={'el-menu-item'} v-if="!loggedinUser" index="/login">SignUp</li>
                    </ul>
                </div>
            </li>
        </ul>
    )
}
{/* <nav classNameName="nav-bar-horizontal">
            {routes.map(({ path, label }, idx) => <NavLink key={idx} to={path} classNameName="nav-link">{label}</NavLink>)}
        </nav> */}

export default NavBar
