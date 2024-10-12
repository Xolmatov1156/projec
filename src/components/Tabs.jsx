import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useTranslation } from 'react-i18next';
import "../i18n";

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
  const { t, i18n } = useTranslation();  // Move useTranslation hook here
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', textAlign: 'center' }}>
      <h2 style={{ textAlign: 'left', marginLeft: '10px', fontSize: "40px", fontWeight: "semibold" }}>{t("services")}</h2>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px', }}>
        <div style={{ width: '40px', height: '5px', backgroundColor: 'red', marginLeft: "10px", }}></div>
      </div>

      <Box>
        <Tabs 
          value={value} 
          onChange={handleChange} 
          aria-label="service tabs"
          TabIndicatorProps={{
            style: {
              backgroundColor: 'transparent',
              color: "white"
            },
          }}
          sx={{
            '& .MuiTab-root': {
              textTransform: 'none',
              color: '#fff',
              backgroundColor: '#1d1d1d',
              margin: '0 5px',
              width: '190px', 
              height: '40px', 
              padding: "0px",
              borderRadius: '4px',
            },
            '& .Mui-selected': {
              backgroundColor: 'red',
              color: "white"
            },
          }}
        >
          <Tab label={t("Visa Consultations")} className='!text-[white]' {...a11yProps(0)} />
          <Tab label={t("Tourist Visas")} className='!text-[white]' {...a11yProps(1)} />
          <Tab label={t("Business Visas")} className='!text-[white]' {...a11yProps(2)} />
          <Tab label={t("Document Preparation")} className='!text-[white]' {...a11yProps(3)} />
          <Tab label={t("Tour Packages")} className='!text-[white]' {...a11yProps(4)} />
          <Tab label={t("Insurance")} className='!text-[white]' {...a11yProps(5)} />
        </Tabs>
          <div className='w-[4px] mt-[15px] ml-[40px] h-[40px] bg-red-600'></div>
      </Box>

      <div className='text-start ml-[20px] text-[18px] font-semibold'>
        <CustomTabPanel value={value} index={0}>
          {t("Services-text1")}
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          {t("Services-text2")}
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          {t("Services-text3")}
        </CustomTabPanel>
        <CustomTabPanel value={value} index={3}>
          {t("Services-text4")}
        </CustomTabPanel>
        <CustomTabPanel value={value} index={4}>
          {t("Services-text5")}
        </CustomTabPanel>
        <CustomTabPanel value={value} index={5}>
          {t("Services-text6")}
        </CustomTabPanel>
      </div>
    </Box>
  );
}
