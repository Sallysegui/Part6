
import { createSlice } from '@reduxjs/toolkit'



const notificationSlice = createSlice({
  name: 'notification',
  initialState: '',
  reducers: {
    setNotification( state, action) {
      const notificationValue= action.payload
      console.log(notificationValue)
      return notificationValue
    },  
    clearNotification( state, action) {
      return null
    },

  }
})

export const { setNotification  , clearNotification} = notificationSlice.actions


export const voteNotification = (content, time)=> {
  return dispatch => 
  {
    dispatch(setNotification(`you voted '${content}'`))
    setTimeout(() => {
      dispatch(clearNotification())
    }, time*1000)
  }
}

export const newNotification = (content, time)=> {
  return dispatch => 
  {
    dispatch(setNotification(`new anecdote '${content}'`))
    setTimeout(() => {
      dispatch(clearNotification())
    }, time*1000)
  }
}



export default notificationSlice.reducer