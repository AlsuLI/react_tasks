import React from 'react'

export const Pricecard = ({ item, price, children, buttonLabel }) => {
  const style = { width: 200};
  return (
        <div class="card mb-4 box-shadow" style={style}>
      <div className="card-header">
        <h4 className="my-0 font-weight-normal">{item}</h4>
      </div>
      <div className="card-body">
        <h1 className="card-title pricing-card-title">{price} </h1>
        <div className="mt-3 mb-4">{children}</div>
        <button type="button" className="btn btn-lg btn-block btn-outline-primary">{buttonLabel}</button>
      </div>
    </div>
  )
}
