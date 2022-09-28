import { useState } from "react";

const useCounter = (initialState) => {

    const [counter, setCounter] = useState(initialState);

    const handleDecrement = () => {
        if (counter <= 1) return;
        setCounter(counter - 1);
    };

    const handleIncrement = () => {
        setCounter(counter + 1);
    };

    const handleReset = () => {
        setCounter(initialState);
    }

    return { counter, handleDecrement, handleIncrement, handleReset };
}

export default useCounter