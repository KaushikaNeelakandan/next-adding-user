import React, { Suspense } from 'react'
//import Userlist from './Userlist.jsx'
import Loading from '../loading'  
const Userlist = React.lazy(() => import('./Userlist.jsx'));

const tickets = () => {
  return (
    <div>user list
      <Suspense fallback={<Loading />}>
        <Userlist/>
      </Suspense>
    </div>
  )
}

export default tickets