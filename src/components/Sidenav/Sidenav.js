import React from 'react'
import './Sidenav.css';
import { Avatar } from '@mui/material';
import Button from '@mui/material/Button';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
const Sidenav = () => {
  return (
    <div className="sideNavContainer">
        <div className="sideNavTop">
            <Avatar className="sideNavAvatar" alt="User profile" src="/images/img1.jpg"/>
            <span className="sideNavUserName">Pranav J N</span>
            <ManageSearchIcon fontSize="large" className="sidenavExplore"/>
        </div>
        <div className="sideNavWelcomeText">
            Welcome To Events
        </div>
        <div className="sideNavEventsList">
            <div className="sideNavEvent">
                <div className='sideNavEventHeader'>
                    Coffee Date
                </div>
                <div className="sideNavEventFooter">
                    <div>
                        Take me to your favorite cafe
                    </div>
                    <div>
                        <Button className='sideNavEventJoinButton' size="medium">
                        Join Now
                        </Button>
                    </div>
                </div>
            </div>
            <div className="sideNavEventBlind">
                <div className='sideNavEventHeader'>
                    Blind Date
                </div>
                <div className="sideNavEventFooter">
                    <div>
                        Find a random match and see where it goes.
                    </div>
                    <div>
                        <Button className='sideNavEventJoinButton' size="medium">
                        Join Now
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Sidenav