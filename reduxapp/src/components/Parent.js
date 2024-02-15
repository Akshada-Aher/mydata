import Child from "./Child";
const Parent=(props)=>{

    return(
        <>
    <Child></Child>
    <h1>{props.data}</h1>
       
        </>
    )
}
export default Parent;