import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

function CustomTabPanel(props) {
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
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
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
    <Box sx={{ width: '100%', textAlign: 'center' }}>
      <h2 style={{ textAlign: 'left', marginLeft: '10px', fontSize: "40px", fontWeight: "semibold" }}>Services</h2>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
        <div style={{ width: '40px', height: '5px', backgroundColor: 'red', marginLeft: "10px",  }}></div>
      </div>

      <Box>
        <Tabs 
          value={value} 
          onChange={handleChange} 
          aria-label="service tabs"
          TabIndicatorProps={{
            style: {
              backgroundColor: 'transparent',
            },
          }}
          sx={{
            '& .MuiTab-root': {
              textTransform: 'none',
              color: '#fff',
              backgroundColor: '#1d1d1d',
              margin: '0 5px',
              width: '190px', 
              height: '!40px', 
              padding: "0px",
              borderRadius: '4px',
            },
            '& .Mui-selected': {
              backgroundColor: 'red',
              color: '#fff',
            },
          }}
        >
          <Tab label="Visa Consultations" {...a11yProps(0)} />
          <Tab label="Business Visas" {...a11yProps(1)} />
          <Tab label="Document Preparation" {...a11yProps(2)} />
          <Tab label="Tour Packages" {...a11yProps(3)} />
          <Tab label="Insurance" {...a11yProps(4)} />
          <Tab label="Insurance" {...a11yProps(5)} />
        </Tabs>
          <div className='w-[4px] mt-[15px] ml-[40px] h-[40px] bg-red-600'></div>
      </Box>

      {/* Tab Panels */}
      <div className='text-start ml-[20px] text-[18px] font-semibold'>
      <CustomTabPanel value={value} index={0}>
      EASY VISA CONSULTING specialists provide detailed consultations on visa applications for countries such as Schengen, Canada, the USA, the United Kingdom, Japan, and Korea. We explain all the nuances of document submission and help you prepare for the process.
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
      We assist in obtaining tourist visas for comfortable travel to popular countries, including Europe, North America, and Asia. Our experts provide full support at every stage.
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
      For business trips, EASY VISA CONSULTING offers comprehensive solutions for visa applications to the world's leading countries. We ensure a fast and professional document submission process.
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
      We carefully check all your documents to ensure they meet the requirements of visa centers. We also assist in gathering the necessary certificates and extracts for a successful visa acquisition.
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
      We offer the selection of optimal tourist packages, including trip organization, hotel reservations, and excursions, to make your vacation as comfortable as possible.
      </CustomTabPanel>
      <CustomTabPanel value={value} index={5}>
      We arrange travel insurance that will protect you and your loved ones during your trip, ensuring safety and confidence in any situation start with we.
      </CustomTabPanel>
      </div>
    </Box>
  );
}
