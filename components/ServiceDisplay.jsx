import { services } from '@/utils/constants'
import React from 'react'
import ServiceCard from './ServiceCard'

export default function ServiceDisplay() {
  return (
    <div>
        {services.map((item, index) =>
          item.map((innerItem, innerIndex) => (
            <ServiceCard
              even={index % 2 === 0}
              key={index + innerIndex}
              title={innerItem.title}
              image={innerItem.image}
              description={innerItem.description}
              link={innerItem.link}
            />
          ))
        )}
      </div>
  )
}
