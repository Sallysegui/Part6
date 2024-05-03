import { useDispatch } from 'react-redux'
import { createAnecdote}  from '../reducers/anecdoteReducer'
import {newNotification}  from '../reducers/notificationReducer'

const AnecdotesForm = () =>{
    const dispatch = useDispatch()
    const getId = () => (100000 * Math.random()).toFixed(0)

    const addAnecdote = async (event) => {
        event.preventDefault()
        const content = event.target.anecdote.value
        event.target.anecdote.value = ''
        dispatch(createAnecdote(content))
        dispatch(newNotification(content, 5))

    }

return( 
    <div>
        <h2>create new</h2>
        <form onSubmit={addAnecdote}>
            <div><input  name="anecdote"/></div>
            <button type="submit">create</button>
        </form>
    </div>
)}
export default AnecdotesForm