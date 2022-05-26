import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Event from './Event/Event';
import './Sidenav.css';
import { Avatar } from '@mui/material';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <div>
          <Typography component={'span'}>{children}</Typography>
        </div>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="sideNavContainer">
      <div className='sideNavTop'>
        <Tabs className='Tabs' value={value} onChange={handleChange}>
          <Tab className="sideNavAvatar" icon={<Avatar  alt="User profile" src="/images/img1.jpg"/>} {...a11yProps(0)} ></Tab>
          <Tab className="sideNavHeaderButtons"icon={<ManageSearchIcon fontSize="large" className="sidenavExplore"/>} {...a11yProps(1)} />
          <Tab className="sideNavHeaderButtons2"icon={<ChatOutlinedIcon fontSize="medium" className="sidenavChat"/>} {...a11yProps(2)} />
        </Tabs>
      </div>
      <TabPanel value={value} index={0}>
       Profile
      </TabPanel>
      <TabPanel value={value} index={1}>
       <Event/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        Chat Screen
      </TabPanel>
    </div>
  );
}
