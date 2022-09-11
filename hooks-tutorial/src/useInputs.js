import { useReducer } from "react";

function reducer(state, action) {
    return {
        ...state,
        [action.name]: action.value
    };
}

export default function useInputs(initialForm) {
    // const [값, 함수]
    // useReducer(리듀서 함수, 리듀서 기본 값)
    const [state, dispatch] = useReducer(reducer, initialForm);

    const onChange = e => {
        dispatch(e.target);
    };

    return [state, onChange];
}