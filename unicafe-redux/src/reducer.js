const initialState = {
  good: 0,
  ok: 0,
  bad: 0
}

const counterReducer = (state = initialState, action) => {
  // console.log(action)
  switch (action.type) {
    case 'GOOD':{

      const reviewsChanged = {
        ...state, good: state.good + 1
      }
      return state = reviewsChanged
    }
    case 'OK':{
      const reviewsChangedOk = {
        ...state, ok: state.ok + 1
      }
      return state = reviewsChangedOk
    }
    case 'BAD':{
      const reviewsChangedBad = {
        ...state, bad: state.bad + 1
      }
      return state = reviewsChangedBad
    }
    case 'ZERO':{

    const reviewsChangedZero ={
      good: 0,
      ok: 0,
      bad: 0
    }
      return state = reviewsChangedZero
    }

    default: return state
  } 
  
}

export default counterReducer
