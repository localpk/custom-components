import React, { Fragment } from 'react';

export default function FeaturedNumbers({ data }) {
  const dataAsArray = JSON.parse(data);

  return (
    <div className='row text-center pt-2 pb-5'>
      {dataAsArray.map((item) => {
        return (
          <Fragment key={item.description}>
            <div className='col-sm-6 col-md-3 py-3'>
              <div className='display-3'>
                <strong>{item.numbers}</strong>
              </div>
              <div className='text-muted'>{item.description}</div>
            </div>
          </Fragment>
        );
      })}
    </div>
  );
}
