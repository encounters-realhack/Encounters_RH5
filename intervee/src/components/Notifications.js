import { useContext, useEffect } from 'react';
import { Button } from '@mui/material';

import { SocketContext } from '../contexts/context';

const Notifications = () => {
  const { answerCall, call, callAccepted } = useContext(SocketContext);

  useEffect(()=>{
    console.log({callAccepted, call, answerCall})
  },[callAccepted, call, answerCall])
  return (
    <>
      {call.isReceivingCall && !callAccepted && (
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <h1>{call.name} is calling:</h1>
          <Button variant="contained" color="primary" onClick={answerCall}>
            Answer
          </Button>
        </div>
      )}
    </>
  );
};

export default Notifications;