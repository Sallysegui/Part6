import { useDispatch } from 'react-redux'
import { setFilter} from '../reducers/filterReducer'

const FilterForm = () =>{
    const dispatch = useDispatch()

    const handleChange = (event) => {
        event.preventDefault()
        const filterValue = event.target.value
        dispatch(setFilter(filterValue))
    }

    const style = {
        marginBottom: 10
    }
return( 
    <div>
        <h2>Filter Anecdote</h2>
            <div onChange={handleChange} style={style}><input  name="anecdotefilter"/></div>
    </div>
)}
export default FilterForm