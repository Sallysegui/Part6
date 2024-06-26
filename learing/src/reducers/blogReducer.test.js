import blogReducer from './reducers'
import deepFreeze from 'deep-freeze'

describe('blogReducer', () => {
  test('returns new state with action NEW_BLOG', () => {
    const state = []
    const action = {
      type: 'NEW_BLOG',
      payload: {
        content: 'the app state is in redux store',
        important: true,
        id: 1
      }
    }

    deepFreeze(state)
  
    const newState = blogReducer(state, action)
    

    expect(newState).toHaveLength(1)
    expect(newState).toContainEqual(action.payload)
  })
})