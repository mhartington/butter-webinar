import React from 'react';
import './components.css';
export function Spinner(props) {
  return (
    <div className="showbox">
      <div className="loader">
        <svg className="circular" viewBox="25 25 50 50">
          <circle
            className="path"
            cx="50"
            cy="50"
            r="20"
            fill="none"
            stroke-width="4"
            stroke-miterlimit="10"
          />
        </svg>
      </div>
    </div>
  );
}

export function Video(props) {
  return (
    <video
      src={props.src}
      autoPlay={true}
      loop={true}
      muted={true}
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'contain'
      }}
    />
  );
}

export function FlexLayout(props) {
  return (
    <div
      style={{
        height: '100%',
        width: '100%',
        display: 'flex',
        padding: '2em',
        justifyContent: props.justify ? props.justify : 'space-evenly',
        flexDirection: props.direction ? props.direction : 'column',
        alignItems: props.alignItems ? props.alignItems : 'center',
        alignContent: props.alignContent ? props.alignContent : 'center'
      }}
    >
      {props.children}
    </div>
  );
}
export function BackgroundLayout(props) {
  return (
    <div style={{
      backgroundColor: props.bg,
      color: '#ffffff',
      height: '100%',
      width: '100%',
    }}>
    <FlexLayout {...props}>
      {props.children}
    </FlexLayout>
      </div>
  );
}
