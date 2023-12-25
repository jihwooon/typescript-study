import React, {useState, useCallback, useRef, useEffect, FunctionComponent} from 'react';

const WordRelay = () => {
  const [word, setWord] = useState('제로초');
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');
  const inputEl = useRef(null);

  useEffect(() => {
    console.log('useEffect');
  },[]);

  
}
