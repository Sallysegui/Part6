import { useSelector } from 'react-redux'

const Notification = () => {
  // const notification = useSelector(state => {state.notificarion})
  // console.log(notification)
  const notification = useSelector(state => {
    if ( !state.notification ) {
       return null
    }
    return state.notification
  })

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  return (
    <div style={ notification ? { display: 'block'} : {display: 'none'}}>
      <div  style={style}>
        {notification}
      </div>

    </div>
  )
}

export default Notification