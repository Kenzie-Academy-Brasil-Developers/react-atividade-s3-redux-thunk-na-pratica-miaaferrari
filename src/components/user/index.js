import { useState } from "react";
import { useDispatch } from "react-redux";
import { addCommentThunk } from "../../store/modules/user/thunks";

export const User = () => {
    
    const [userInput, setUserInput] = useState('');
    const dispatch = useDispatch();

    return (
        <div>
            <input type='text' value={userInput} onChange={(e) => setUserInput(e.target.value)} placeholder='Comments here' />
            <button onClick={() => {
                dispatch(addCommentThunk(userInput))
                setUserInput('');
                }}>new comment</button> 
        </div>
    )

}