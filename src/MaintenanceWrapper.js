import React from 'react';
import Maintenance from './Maintenance/Maintenance';

const UNDER_MAINTENANCE = false; // Set to false to disable maintenance mode

const MaintenanceWrapper = ({ children }) => {
  // When UNDER_MAINTENANCE is false, all children (including the / page) are rendered.
  return UNDER_MAINTENANCE ? <Maintenance /> : children;
};

export default MaintenanceWrapper;
