import React, { useState, useMemo, useCallback, useRef } from 'react';

const getAverage = num => {
    console.log("평균값 계산 중...");
    if (num.length === 0) return 0;
    const sum = num.reduce((a, b) => a + b);
    return sum / num.length;
};

const Average = () => {
    const [list, setList] = useState([]);
    const [num, setNum] = useState("");
    const inputEl = useRef(null);

    const onChange = useCallback(e => {
        setNum(e.target.value);
    }, []); // 컴포넌트가 처음 렌더링 될 때만 생성

    const onInsert = useCallback(e => {
        // nextList에 기존 숫자들(num) 정수화해서 append -> setList로 상태 변경 -> setNum으로 초기화
        const nextList = list.concat(parseInt(num));
        setList(nextList);
        setNum('');
        inputEl.current.focus();
    }, [num, list]); // num 또는 list 바뀔 때만 생성

    const avg = useMemo(() => getAverage(list), [list]);

    return (
        <div>
            <input value={num} onChange={onChange} ref={inputEl} />
            <button onClick={onInsert}>등록</button>
            <ul>
                {list.map((value, index) => <li key={index}>{value}</li>)}
            </ul>
            <div>
                <b>평균값:</b> {avg}
            </div>
        </div>
    );
};

export default Average;