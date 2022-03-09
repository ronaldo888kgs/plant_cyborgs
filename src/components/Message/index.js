
import React, {useEffect} from 'react';
import { useSnackbar } from 'notistack';

const Message = ({ message, type }) => {
  const { enqueueSnackbar } = useSnackbar();
  useEffect(()=>{
    if(message == '') return;
    if(type == '') return;
    enqueueSnackbar(message, { variant: type });
  },[message, type])
  return (
    <div></div>
  );
}

export default Message;
