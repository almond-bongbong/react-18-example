import React from 'react';
import useSWR from 'swr';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const fetcher = async () => {
  await delay(3000);
  return [];
};

function PhotoPanel() {
  useSWR('/api2', fetcher, { suspense: true });

  return <div className="panel">Users</div>;
}

export default PhotoPanel;
