import React from 'react';
import { Spin } from 'antd';

const Fallback = (
  <div style={{ height: '100%', textAlign: 'center', opacity: '0.5' }}>
    <Spin data-testid="fallback-spinner" style={{ top: 'calc(50% - 18px)' }} />
  </div>
);

export default Fallback;
