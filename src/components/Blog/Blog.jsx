import React from 'react'

export const Blog = () => {
  const style = {height: '225px', width: "100%", display: 'block'}
  return (
    <div className="card mb-4 box-shadow">
      <img
        className="card-img-top"
        src="https://media.cnn.com/api/v1/images/stellar/prod/231012145733-04-clearwater-florida-tornado-1012-restricted.jpg?c=16x9&q=h_270,w_480,c_fill/f_webp"
        alt="%ALT%"
        style={style}
      />
      <div className="card-body">
        <p className="card-text">
          Florida tornadoes damage homes, businesses and cars on both coasts
        </p>
        <div className="d-flex justify-content-between align-items-center">
          <button type="button" class="btn btn-sm btn-outline-secondary">
            View
          </button>
          <small className="text-muted">3 mins</small>
        </div>
      </div>
    </div>
  );
}
