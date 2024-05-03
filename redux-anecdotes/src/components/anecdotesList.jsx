
import { useSelector, useDispatch } from 'react-redux'
import { addVote } from '../reducers/anecdoteReducer'
import { voteNotification } from '../reducers/notificationReducer'
//import { useDispatch } from 'react-redux'

const AnecdotesList = () =>{
    const anecdotes = useSelector(state => {
        if ( !state.filter ) {
           return state.anecdotes
        }
        return state.anecdotes.filter((str) => str.content.includes(state.filter));
    })
 

    const dispatch = useDispatch()

    const vote = async (anecdote ,id) => {
        dispatch(addVote(id , anecdote))
        // anecdoteService.updateOne(id, anecdote )
        // const newAnecdote = await anecdoteService.updateOne(id, anecdote ) 
    }
    const displayNotification = (content) =>{
        dispatch(voteNotification(content,5))
        // setTimeout(() => {
        //     dispatch(setNotification(''))
        // }, 5000);

    }

return( 
    <div>
        <h2>Anecdotes</h2>
        <div>
        {anecdotes.map(anecdote =>
            <div key={anecdote.id}>
            <div>
                {anecdote.content}
            </div>
            <div>
                has {anecdote.votes}
                <button onClick={() =>{ vote(anecdote , anecdote.id), displayNotification(anecdote.content) }}>vote</button>
            </div>
            </div>
        )}
        </div>
    </div>
)}
export default AnecdotesList