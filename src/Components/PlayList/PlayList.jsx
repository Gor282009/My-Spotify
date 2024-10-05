import React, { useEffect } from 'react'
import {useStateProvider } from ".Ultim/StateProvider"

function PlayList() {
  const [{token, dispatch}] = useStateProvider()
  useEffect(() => {

  },[token, dispatch])
  return (
    <div className='pl-[2px]'>
    </div>
  )
}

export default PlayList