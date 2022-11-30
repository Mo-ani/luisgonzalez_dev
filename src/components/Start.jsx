import React from 'react'

export const Start = ({start,setStart,setCursorOver}) => {

  const onStart = () => {
    return {__html: start ?  `` : `<div>Start</div>`};
  };

  return (
    <div id={start ? "" : "start-btn"}
    onClick={ () => {
      setStart(!start)
      setCursorOver( false );
    }}
    onMouseEnter={() => {
      setCursorOver( true )
    }}
    onMouseLeave={() => {
      setCursorOver( false )
    }} dangerouslySetInnerHTML={ onStart() }
    ></div>
  )
}
