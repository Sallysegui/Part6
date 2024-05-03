const generateId = () =>
  Number((Math.random() * 1000000).toFixed(0))
  
export const createAnecdote = (content) =>{
    return {
        type: 'NEW_ANECDOTE',
        payload: {
            content,
            votes: 0,
            id: generateId()
            
        }
    }
} 

export const addVote = (id) =>{
    return {
        type: 'ADD_VOTE',
        payload: { id }
    }
} 


// export const setFilter = (filterValue) =>{
//     return {
//         type: 'SET_FILTER',
//         payload: filterValue
//       }
// }