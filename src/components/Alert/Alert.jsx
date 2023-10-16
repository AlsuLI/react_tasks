import React from 'react'

export const Alert = ({title, show}) => {
  return (
    <div
      className={`alert alert-danger${show ? " " : "-show"}`}
      role="alert"
      show={show}
    >
      <b>{title}</b>
     
    </div>
    
  );
}
