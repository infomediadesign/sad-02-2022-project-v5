import React from 'react'
import Button from '@mui/material/Button';
import './Event.css';

const Event = () => {
  return (
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
  )
}

export default Event