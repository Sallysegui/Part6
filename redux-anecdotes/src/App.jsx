
import AnecdotesForm from './components/anecdotesForm'
import AnecdotesList from './components/anecdotesList'
import FilterForm from './components/visibilityFilter'
import Notification from './components/Notification'
// import anecdoteService from './services/anecdotesServ'
// import { setAnecdotes } from './reducers/anecdoteReducer'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { initializeAnecdotes } from './reducers/anecdoteReducer'

const App = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initializeAnecdotes())
  }, [])



  return (
    <div>
      
      <h2>Anecdotes</h2>
      <Notification/>
      <FilterForm/>
      <AnecdotesList />
      <AnecdotesForm/>
    </div>
  )
}

export default App