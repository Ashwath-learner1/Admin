'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Accordion,AccordionActions,AccordionDetails,AccordionSummary } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

export default function Faqs() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
        <div className='flex justify-center flex-col text-black dark:text-white text-xl'>
            <p>FAQs</p>
            <p className='text-md text-black dark:text-gray-2'> Here you can see the frequently asked questions</p>
        </div>

      <TabContext  value={value}>
        <Box sx={{display:'flex',justifyContent:'center',marginTop:'45px'}} >
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Ticket Bookings" value="1" className='text-black dark:text-white text-2xl' />
            <Tab label="Nominations" value="2" className='text-black dark:text-white text-2xl' />
            <Tab label="Exhibitors" value="3" className='text-black dark:text-white text-2xl' />
            
          </TabList>
        </Box>
        <TabPanel value="1">
            <Accordion className='dark:bg-black'>
                <AccordionSummary expandIcon={<AddCircleOutlineIcon color='success'/>}>
                    <p className='text-black text-sm font-semibold dark:text-white'>Lorem ipsum</p>

                </AccordionSummary>
                <AccordionDetails>
                    <p className='text-black text-sm dark:text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam efficitur massa massa, ut luctus metus fermentum nec. Cras mattis et dui at commodo. Duis blandit elementum leo, sed porttitor eros. Aliquam suscipit libero odio, et fringilla diam faucibus vitae. Sed semper turpis a mi finibus, nec tincidunt metus tincidunt. In velit lacus, congue ac feugiat id, scelerisque vitae odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </AccordionDetails>
            </Accordion>
            <Accordion className='dark:bg-black'>
                <AccordionSummary expandIcon={<AddCircleOutlineIcon color='success'/>}>
                    <p className='text-black text-sm font-semibold dark:text-white'>Lorem ipsum</p>

                </AccordionSummary>
                <AccordionDetails>
                    <p className='text-black text-sm  dark:text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam efficitur massa massa, ut luctus metus fermentum nec. Cras mattis et dui at commodo. Duis blandit elementum leo, sed porttitor eros. Aliquam suscipit libero odio, et fringilla diam faucibus vitae. Sed semper turpis a mi finibus, nec tincidunt metus tincidunt. In velit lacus, congue ac feugiat id, scelerisque vitae odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </AccordionDetails>
            </Accordion>
            <Accordion className='dark:bg-black '>
                <AccordionSummary expandIcon={<AddCircleOutlineIcon color='success'/>}>
                    <p className='text-black text-sm font-semibold dark:text-white'>Lorem ipsum</p>

                </AccordionSummary>
                <AccordionDetails>
                    <p className='text-black text-sm dark:text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam efficitur massa massa, ut luctus metus fermentum nec. Cras mattis et dui at commodo. Duis blandit elementum leo, sed porttitor eros. Aliquam suscipit libero odio, et fringilla diam faucibus vitae. Sed semper turpis a mi finibus, nec tincidunt metus tincidunt. In velit lacus, congue ac feugiat id, scelerisque vitae odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </AccordionDetails>
            </Accordion>
        </TabPanel>
        <TabPanel value="2"><Accordion className='dark:bg-black'>
                <AccordionSummary expandIcon={<AddCircleOutlineIcon color='success'/>}>
                    <p className='text-black text-sm font-semibold dark:text-white'>Lorem ipsum</p>

                </AccordionSummary>
                <AccordionDetails>
                    <p className='text-black text-sm  dark:text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam efficitur massa massa, ut luctus metus fermentum nec. Cras mattis et dui at commodo. Duis blandit elementum leo, sed porttitor eros. Aliquam suscipit libero odio, et fringilla diam faucibus vitae. Sed semper turpis a mi finibus, nec tincidunt metus tincidunt. In velit lacus, congue ac feugiat id, scelerisque vitae odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </AccordionDetails>
            </Accordion>
            <Accordion className='dark:bg-black'>
                <AccordionSummary expandIcon={<AddCircleOutlineIcon color='success'/>}>
                    <p className='text-black text-sm font-semibold dark:text-white'>Lorem ipsum</p>

                </AccordionSummary>
                <AccordionDetails>
                    <p className='text-black text-sm dark:text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam efficitur massa massa, ut luctus metus fermentum nec. Cras mattis et dui at commodo. Duis blandit elementum leo, sed porttitor eros. Aliquam suscipit libero odio, et fringilla diam faucibus vitae. Sed semper turpis a mi finibus, nec tincidunt metus tincidunt. In velit lacus, congue ac feugiat id, scelerisque vitae odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </AccordionDetails>
            </Accordion>
            <Accordion className='dark:bg-black'>
                <AccordionSummary expandIcon={<AddCircleOutlineIcon color='success'/>}>
                    <p className='text-black text-sm font-semibold dark:text-white'>Lorem ipsum</p>

                </AccordionSummary>
                <AccordionDetails>
                    <p className='text-black text-sm dark:text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam efficitur massa massa, ut luctus metus fermentum nec. Cras mattis et dui at commodo. Duis blandit elementum leo, sed porttitor eros. Aliquam suscipit libero odio, et fringilla diam faucibus vitae. Sed semper turpis a mi finibus, nec tincidunt metus tincidunt. In velit lacus, congue ac feugiat id, scelerisque vitae odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </AccordionDetails>
            </Accordion></TabPanel>
        <TabPanel value="3">
            <Accordion className='dark:bg-black'>
                <AccordionSummary expandIcon={<AddCircleOutlineIcon color='success'/>}>
                    <p className='text-black text-sm font-semibold dark:text-white'>Lorem ipsum</p>

                </AccordionSummary>
                <AccordionDetails>
                    <p className='text-black text-sm dark:text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam efficitur massa massa, ut luctus metus fermentum nec. Cras mattis et dui at commodo. Duis blandit elementum leo, sed porttitor eros. Aliquam suscipit libero odio, et fringilla diam faucibus vitae. Sed semper turpis a mi finibus, nec tincidunt metus tincidunt. In velit lacus, congue ac feugiat id, scelerisque vitae odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </AccordionDetails>
            </Accordion>
            <Accordion className='dark:bg-black'>
                <AccordionSummary expandIcon={<AddCircleOutlineIcon color='success'/>}>
                    <p className='text-black text-sm font-semibold dark:text-white'>Lorem ipsum</p>

                </AccordionSummary>
                <AccordionDetails>
                    <p className='text-black text-sm dark:text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam efficitur massa massa, ut luctus metus fermentum nec. Cras mattis et dui at commodo. Duis blandit elementum leo, sed porttitor eros. Aliquam suscipit libero odio, et fringilla diam faucibus vitae. Sed semper turpis a mi finibus, nec tincidunt metus tincidunt. In velit lacus, congue ac feugiat id, scelerisque vitae odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </AccordionDetails>
            </Accordion>
            <Accordion className='dark:bg-black'>
                <AccordionSummary expandIcon={<AddCircleOutlineIcon color='success'/>}>
                    <p className='text-black text-sm font-semibold dark:text-white'>Lorem ipsum</p>

                </AccordionSummary>
                <AccordionDetails>
                    <p className='text-black text-sm dark:text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam efficitur massa massa, ut luctus metus fermentum nec. Cras mattis et dui at commodo. Duis blandit elementum leo, sed porttitor eros. Aliquam suscipit libero odio, et fringilla diam faucibus vitae. Sed semper turpis a mi finibus, nec tincidunt metus tincidunt. In velit lacus, congue ac feugiat id, scelerisque vitae odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </AccordionDetails>
            </Accordion></TabPanel>
       
      </TabContext>
    </Box>
  );
}
