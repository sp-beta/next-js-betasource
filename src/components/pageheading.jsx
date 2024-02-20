import React from 'react'

function PageHeading(props) {
  return (
    <div  className="container-fluid header bg-white breadcumb-area p-0">
      <div  className="container">
        <div  className="row d-flex align-items-center">
          <div  className="col-lg-12">
            <div  className="breadcumb-content wow slideInUp" data-wow-delay="0.2s">
              <h1>{props.text}</h1>
              <ul>
                <li><a href={props.categorypath}>{props.category}</a></li>
                <li>{props.text}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PageHeading;
