import React from 'react'

import CardDataStats from '../components/CardDataStats'

function Home() {
  return (
    <div>
        
        
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        <CardDataStats title="Applied Nominations" total="0"  />
        <CardDataStats title="Pending Nominations" total="0" />
        <CardDataStats title="View All" />
        </div>
        </div>
  )
}

export default Home