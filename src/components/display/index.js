import { useReducer } from "react";
import { useSelector } from "react-redux";

export const Display = () => {

    const user = useSelector(store => store.user.comments);

    return (
        <div>
            {user.map((item, index) => (
                <p key={index}>{item}</p>
            ))}
        </div>
    )
}