import React, { useState } from 'react';

function AutoBatchingPage() {
  const [, setFlag] = useState(false);
  const [, setCount] = useState(0);

  // 이전 버전의 경우 예시 https://codesandbox.io/s/modest-gould-e3uh26?file=/src/App.js
  const onClickButton = async () => {
    await Promise.resolve();
    setFlag((prev) => !prev);
    setCount((prev) => prev + 1);
  };

  console.log('render component');

  return (
    <div>
      <button type="button" onClick={onClickButton}>
        setState
      </button>
    </div>
  );
}

export default AutoBatchingPage;
