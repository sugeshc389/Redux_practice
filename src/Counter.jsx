import { useDispatch, useSelector } from "react-redux"

export default function Counter() {
    const value = useSelector((state) => {
        return state.value;


    })
    const dispatch = useDispatch();
    console.log(value);
    return (
        <div>
            <button onClick={() => {
                dispatch({
                    type: 'increment'
                })
            }}>Increment</button>
            <h1>{value}</h1>
            <button onClick={() => {
                dispatch({
                    type: 'decrement'
                })
            }}>Decrement</button>
        </div>
    )
}