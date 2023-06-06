/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useImperativeHandle, useRef, useEffect } from 'react';
import video from '../video/video.mp4';

// useImperativeHandle
// Tuỳ chỉnh 'ref' của một function component

export default function UseImperativeHandle() {
  document.title = 'Learn Hooks useImperativeHandle';

  const videoRef = useRef<any>();

  useEffect(() => {
    console.log(videoRef.current);
  }, []);

  const handlePlay = () => {
    videoRef.current.play();
  };

  const handlePause = () => {
    videoRef.current.pause();
  };

  return (
    <div>
      <Video ref={videoRef} />
      <br />
      <button onClick={handlePlay}>Play</button>
      <button onClick={handlePause}>Pause</button>
    </div>
  );
}

const Video = React.forwardRef((props: any, ref: any) => {
  const videoRef = useRef<any>();

  useImperativeHandle(ref, () => ({
    play() {
      videoRef.current.play();
    },

    pause() {
      videoRef.current.pause();
    },
  }));

  return <video ref={videoRef} src={video} width={280} />;
});
