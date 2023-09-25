'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

export default function MyTickets() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box >
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Buy Ticket" value="1" className='text-black dark:text-white text-2xl' />
            <Tab label="My Tickets" value="2" className='text-black dark:text-white text-2xl'/>
            
          </TabList>
        </Box>
        <TabPanel value="1">Buy Tickets </TabPanel>
        <TabPanel value="2">My Tickets</TabPanel>
       
      </TabContext>
    </Box>
  );
}
