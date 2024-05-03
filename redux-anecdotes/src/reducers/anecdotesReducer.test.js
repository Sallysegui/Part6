import reducer from './anecdoteReducer'
import deepFreeze from 'deep-freeze'

describe('acnecdoteReducer', () => {
  test('returns new state with action notes/createNote', () => {
    const state = []
    const action = {
      type: 'anecdotes/createAnecdote',
      // payload: {
      //   content: 'the app state is in redux store',
      //   id: 1,
      //   votes: 0
      // }
      payload: 'the app state is in redux store'
    }
    

    deepFreeze(state)
    const newState = reducer(state, action)
 
    expect(newState).toHaveLength(1)
    expect(newState.map(s => s.content)).toContainEqual(action.payload)
    // expect(newState[0].content).toContainEqual(action.payload)
  })
  test('returns new state with a anecdote with an extra vote', () => {
    const state = [
      {
        content: 'the app state is in redux store',
        id: 1,
        votes:3
      },
      {
        content: 'state changes are made with actions',
        id: 2,
        votes:4
      }]
    const action = {
      type: 'anecdotes/addVote',
      payload: 1
    }

    deepFreeze(state)
    const newState = reducer(state, action)
    console.log('line44',newState[0].votes)
    expect(newState).toHaveLength(2)
    expect(newState.map(s => s.votes)).toContainEqual(4)
  })





})
