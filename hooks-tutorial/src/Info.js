import useInputs from './useInputs';

const Info = () => {
    const [state, onChage] = useInputs({
        name: '', nickname: ''
    });
    const { name, nickname } = state;


    return (
        <>
            <div>
                <input name='name' value={name} onChange={onChage} />
                <input name='nickname' value={nickname} onChange={onChage} />
            </div>
            <div><b>이름:</b> {name}</div>
            <div><b>닉네임:</b> {nickname}</div>
        </>

    );
};

export default Info;