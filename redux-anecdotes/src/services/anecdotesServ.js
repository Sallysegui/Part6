import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

//////////////////check ig content is the correct object

const createNew = async (content) => {
  console.log(content)
  const object = {content, votes:0}
  const response = await axios.post(baseUrl, object)
  return response.data
}

const updateOne = async (id, anecdote) => {
  // console.log(id)
  // console.log(anecdote)
  const objectUpdated = {...anecdote, votes:anecdote.votes+1}
  // console.log(objectUpdated)
  const response = await axios.put(`${baseUrl}/${id}`, objectUpdated)
  return response.data
}










export default { getAll, createNew, updateOne }