import React, { Suspense, useState } from 'react';
import PhotoPanel from '../components/photo-panel';
import UserPanel from '../components/user-panel';

function SuspensePage() {
  const [activeTab, setActiveTab] = useState('photo');

  const onChangeTab = (key) => {
    setActiveTab(key);
  };

  return (
    <div>
      <button type="button" onClick={() => onChangeTab('photo')}>
        Photo
      </button>
      <button type="button" onClick={() => onChangeTab('user')}>
        User
      </button>

      <Suspense fallback={<div>loading...</div>}>
        {activeTab === 'photo' ? <PhotoPanel /> : <UserPanel />}
      </Suspense>
    </div>
  );
}

export default SuspensePage;
