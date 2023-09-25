import React from 'react'
import Card from '../components/Card'

function ExhibitRequests
() {
  return (
    <div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-10 xl:grid-cols-4 2xl:gap-9.5">
       <Card title='Applied Nominations' total={0}/>
       <Card title='Add a request for your stall '  />
</div>
    </div>
  )
}

export default ExhibitRequests
