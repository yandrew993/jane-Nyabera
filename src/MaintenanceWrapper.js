import React from 'react';
import Maintenance from './components/Maintenance/Maintenance';

const UNDER_MAINTENANCE = true; // Set to false to disable maintenance mode

const MaintenanceWrapper = ({ children }) => {
  return UNDER_MAINTENANCE ? <Maintenance /> : children;
};

export default MaintenanceWrapper;
