import React from 'react';
import useSWR from 'swr';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const fetcher = async () => {
  await delay(3000);
  return [];
};

function PhotoPanel() {
  useSWR('/api1', fetcher, { suspense: true });

  return <div className="panel">Photos</div>;
}

export default PhotoPanel;
