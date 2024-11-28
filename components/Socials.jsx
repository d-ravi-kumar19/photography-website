'use client'
import {RiSnapchatFill, RiFacebookBoxFill,RiInstagramFill } from 'react-icons/ri'
import Link from 'next/link'
const icons =[
    {
        path:'/',
        icon : <RiSnapchatFill/>
    },
    {
        path:'/',
        icon : <RiInstagramFill/>
    },
    {
        path:'/',
        icon : <RiFacebookBoxFill/>
    },
] 

const Socials = ({containerStyles, iconstyle}) => {
  return (
    <div className={`${containerStyles}`}>
    {
        icons.map((icon, index) => {
            return (
                <Link href={icon.path} key={index}>
                    <div className={`${iconstyle}`}>
                        {
                            icon.icon
                        }
                    </div>
                </Link>
            )
        })
    }
        
    </div>
  )
}

export default Socials