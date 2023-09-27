'use client'
import React from 'react'
import Card from '../components/Card'
import Link from 'next/link'
function ExhibitRequests() {
 
  return (
    <div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
       <Card total={'0'} title="Applied stall requests" />
     
     <Link href='/my-exhibit-requests/exhibitor-register'> <Card title={'Add a request for your stall Register Now'} icon={true}/></Link>
       </div>
        
         </div>
  )
}

export default ExhibitRequests
