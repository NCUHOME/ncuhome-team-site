import React from 'react';
import './style.scss';

interface Props {
  width?: string | number;
  height?: string | number;
}

const VideoPlayer: React.FC<Props> = ({
  width = '100vw',
  height = '100vh',
}) => (
  <div
    className="video-player-container"
    style={{
      width,
      height,
    }}
  >
    <video
      id="video"
      autoPlay
      loop
      muted
      src="https://static.ncuos.com/team/video.mp4"
    />
  </div>
);

export default VideoPlayer;
