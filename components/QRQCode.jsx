import { hero } from '@/utils/assets'
import Image from 'next/image'
import React from 'react'

export default function QRQCode() {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:text-left text-center lg:m-20 m-5 gap-5 border border-primary p-5 rounded-md">
        <Image src={hero} className="lg:w-56 w-full  rounded-md" />
        <div>
          <h3 className="text-3xl text-primary mb-3">
            Enjoy the same savings in the Expedia App
          </h3>
          <p>
            Save 20% or more on select hotels. Our deals help you start your
            next adventure and with the app you can easily manage your trip on
            the go Save 20% or more on select hotels. Our deals help you start
            your next adventure and with the app you can easily manage your trip
            on the go
          </p>
          <p className="font-semibold mt-5">
            Scan the QR code with your device camera and download our app
          </p>
        </div>
        <div>
          <p className="border-primary border p-3 w-32 text-center">
            QRQ Code Available Soon
          </p>
        </div>
      </div>
  )
}
