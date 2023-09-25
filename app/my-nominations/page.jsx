import React from 'react'
import Card from '../components/Card'
function MyNominations() {
  return (
    <div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
       <Card title='Applied Nominations' total={0}/>
       <Card title='Pending Nominations' total={0}/>
       <Card title='View All'/>
       </div>
    </div>
  )
}

export default MyNominations