import React from 'react';
import { useDeck } from 'mdx-deck';
import './fadein.css';
function Provider(props) {
  const deck = useDeck();
  return (
  <div style={{
      backgroundColor: 'var(--theme-ui-colors-background,#fff)'
    }}>

    {!([0, 2, 13].includes(deck.index)) && deck.mode !== 'PRESENTER' ? (
      <>
        <div
          className="top-left-square"
          style={{
            backgroundImage: 'url(dots-1.png)',
            width: 225,
            height: 225,
            zIndex: 3,
            backgroundRepeat: 'no-repeat no-repeat',
            backgroundColor: 'transparent',
            position: 'absolute',
            top: -80,
            left: -115,
            backgroundSize: 'cover',
          }}
        />
        <div
          className="bottom-right-square"
          style={{
            backgroundImage: 'url(dots-5.png)',
            width: 363,
            height: 208,
            zIndex: 3,
            backgroundColor: 'transparent',
            position: 'absolute',
            bottom: -77,
            left: 870,
            backgroundRepeat: 'no-repeat no-repeat',
            backgroundSize: 'cover',
          }}
        />
      </>
    ) : null}
    <div
      style={{
        position: 'absolute',
        top: 0,
        height: 12,
        left: 0,
        right: 0,
        backgroundColor: '#3880FF',
        zIndex: 1,
      }}
    />
      {props.children}
  </div>
  )
}
export default Provider;
