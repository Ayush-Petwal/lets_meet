import CallList from '@/components/CallList'
import React from 'react'

const Recordings = () => {
  return (
    <section className='flex size-full flex-col gap-10 text-white'>
      
      <CallList type="recordings" />
    </section>
  )
}

export default Recordings
