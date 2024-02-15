import {sub} from '../features/counterslice'
import { useSelector,useDispatch } from 'react-redux'
 const Todo=()=>{

  const result=useSelector((state)=>state.counter.data)
    return(
        <>
        <h1>{result}</h1>
        </>
    )
}
export default Todo;