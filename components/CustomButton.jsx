'use client'
import React from 'react'
import {FaUser} from "../utils/assets"
import { usePathname } from 'next/navigation'
import Link from 'next/link'
export default function CustomButton({title='button' , variant , link='/' , Icon , onClickHandel }) {
    const pathname = usePathname()
  switch(variant){

    case "icon":
    return(
        <button className="h-fit text-xl" onClick={onClickHandel}>
           {Icon}
        </button>
    )
    case "avatar":
    return(
        <button className='bg-gray-300 p-2 rounded-full h-fit '>
            <FaUser className='' size={'18'}  />
        </button>
    )
    case "one":
    return(
        <Link href={link}><button className='border h-fit py-1 px-3 rounded-full border-gray-300 text-primary font-semibold'>{title}</button></Link>
    )
    case "two":
    return(
        <Link href={link}>
        <button className="h-fit text-xl text-white bg-primary px-3 py-1 rounded-full" onClick={onClickHandel}>
           {title}
        </button>
        </Link>
    )

    case "three":
      return(
          <button className="h-fit text-xl text-black m-1 bg-primary px-5 py-1 rounded-md " onClick={onClickHandel}>
             {title}
          </button>
      )
      case "four":
    return(
      <button
      onClick={onClickHandel}
  
      className="bg-black text-primary py-2 px-4 rounded-full hover:bg-primary hover:text-white transition duration-300"
    >
     {title}
    </button>
    )
    case "nav":
    return(
       <Link href={link}>
        <button
        className={`h-fit font-semibold ${
          pathname === link ? 'text-primary' : 'text-gray-600'
        }`}
      >
        {title}
      </button>
       </Link>
    )
    default :
    return(
        <button>{title}</button>
    )
  }
}
