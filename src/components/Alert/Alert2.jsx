import React from 'react'

export const Alert2 = ({title, children, show}) => {
  return (
    <div
      className={`alert alert-danger${show ? " " : "-show"}`}
      role="alert"
      show={show}
    >
      <b>{title}</b>
      <p>{children}</p>
    </div>
  );
}
