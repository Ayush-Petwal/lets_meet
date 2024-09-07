'use client'
import { useCall, useCallStateHooks } from '@stream-io/video-react-sdk'
import React from 'react'
import { Button } from './ui/button'
import { useRouter } from 'next/navigation'

const EndCallButton = () => {
    const call = useCall()
    const router = useRouter()

    const {useLocalParticipant} = useCallStateHooks()
    const localParticipant = useLocalParticipant()
    
    const isMeetingHost = localParticipant && call?.state.createdBy && localParticipant.userId === call.state.createdBy.id

    if(!isMeetingHost) return null

    return (
        <Button onClick={async() => {
            await call.endCall();
            router.push('/')
        }} className='bg-red-500 '>
            End Call
        </Button>
    )
}

export default EndCallButton
