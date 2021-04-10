
import { useEffect, useState } from 'react';

const getWidth = () => window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
const getHeight = () => window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

export function useCurrentWidth() {
  let [width, setWidth] = useState(getWidth());

  useEffect(() => {
    let timeoutId = null;
    const resizeListener = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => setWidth(getWidth()), 150);
    };
    window.addEventListener('resize', resizeListener);

    return () => {
      window.removeEventListener('resize', resizeListener);
    }
  }, [])

  return width;
}

export function useCurrentHeight() {
  let [height, setHeight] = useState(getHeight());

  useEffect(() => {
    let timeoutId = null;
    const resizeListener = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => setHeight(getHeight()), 150);
    };
    window.addEventListener('resize', resizeListener);

    return () => {
      window.removeEventListener('resize', resizeListener);
    }
  }, [])

  return height;
}