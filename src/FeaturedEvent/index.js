import React from 'react'

import style from './style.module.scss'

export default function FeaturedEvent({ caption, date, name }) {
  return (
    <div className={`row text-center my-3 pt-3 pb-2 ${style.featuredEvent}`}>
      <div className="col-sm-12">
        <p class="lead">{caption}</p>
        <p class="display-4">
          <strong>{date}</strong>
        </p>
        <p class="lead font-weight-bold">{name}</p>
      </div>
    </div>
  )
}
