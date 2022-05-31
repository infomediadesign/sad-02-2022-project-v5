import React from 'react'
import Button from '@mui/material/Button';
import './Event.css';

const Event = () => {
  return (
    <div className='sideNavContainer'>
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

export default Event