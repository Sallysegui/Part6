import AnecdoteForm from './components/AnecdoteForm'
import Notification from './components/Notification'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { getAnecdotes, createAnecdote, updateAnecdote } from './request'
import { useNotificationDispatch} from './notificationContext'


const App = () => {
  const queryClient = useQueryClient()
  const dispatch = useNotificationDispatch()


  const newAnecdoteMutation = useMutation({ mutationFn: createAnecdote,
    onSuccess: (newAnecdote) => {
      // queryClient.invalidateQueries({ queryKey: ['anecdotes'] })
      const anecdotes = queryClient.getQueryData(['anecdotes'])
      queryClient.setQueryData(['anecdotes'], anecdotes.concat(newAnecdote))
    },
    onError: (error) => {
      const errorMessage = error.response.data.error
      console.log(errorMessage);
      dispatch({ type: 'error', payload: errorMessage })
      setTimeout(() => {
          dispatch({ type: 'none' })
      }, 5000)
    }
  })


  const addAnecdote = async (content) => {
    newAnecdoteMutation.mutate({ content, votes: 0 })
  }

  const updateAnecdoteMutation = useMutation({
    mutationFn: updateAnecdote,
    onSuccess: (updatedAnec) => {
      const anecdotes = queryClient.getQueryData(['anecdotes'])
      const id = updatedAnec.id
      const updatedAnecdotes = anecdotes.map(a =>
        a.id !== id ? a : updatedAnec)
      queryClient.setQueryData(['anecdotes'], updatedAnecdotes)

    },
  })

  const handleVote = async  (anecdote) => {
    console.log('anecdote')
    updateAnecdoteMutation.mutate({...anecdote, votes: anecdote.votes + 1 })
    console.log('voted')
    await dispatch({ type: 'voted', payload: `You have voted ${anecdote.content}!`})
    setTimeout(() => {
      dispatch({ type: 'none' })
    }, 5000)
    
   
  }


  const result = useQuery({
    queryKey: ['anecdotes'],
    queryFn: getAnecdotes,
    refetchOnWindowFocus: false,
    retry: 1
  })
  console.log(JSON.parse(JSON.stringify(result)))


  if ( result.isLoading ) {
    return <div>loading data...</div>
  } else if (result.isError ) {
    return <span>anecdote service not available due to problems in server </span>
  }

  const anecdotes = result.data

  return (
    <div>
      <h3>Anecdote app</h3>
    
      <Notification />
      <AnecdoteForm addAnecdote={addAnecdote} />
    
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() =>{ handleVote(anecdote)} }>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
