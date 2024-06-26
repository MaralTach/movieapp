import React from 'react'
import CardContainer from './components/CardContainer'

export const metadata = {
  title:"Profile",
  description:"Profile Page"
}

const Profile = () => {
  return (
    <div className='flex items-center justify-center mt-20'> 
      <div>
        <h1 className='text-3xl md:text-6xl text-white text-center'>Who is watching?</h1>
        <CardContainer/>
      </div>
    </div>
  )
}

export default Profile