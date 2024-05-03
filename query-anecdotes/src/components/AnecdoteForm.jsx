import { useNotificationDispatch} from '../notificationContext'

const AnecdoteForm = ({addAnecdote}) => {
  const dispatch = useNotificationDispatch()
  
  const onCreate = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    addAnecdote(content)
    dispatch({type:'aCreated', payload: `You have voted ${content}!`})
    setTimeout(() => {
      dispatch({ type: 'none' })
    }, 5000)
     
  }

  return (
    <div>
      <h3>create new</h3>
      <form onSubmit={onCreate}>
        <input name='anecdote' />
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm
