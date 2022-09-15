import { useSearchParams } from 'react-router-dom';
const About = () => {
    const [searchParams, setSerchParmas] = useSearchParams();
    const detail = searchParams.get('detail');
    const mode = searchParams.get('mode');

    const onToggleDetail = () => {
        setSerchParmas({ mode, detail: detail === 'true' ? false : true });
    };

    const onIncreaseMode = () => {
        const nextMode = mode === null ? 1 : parseInt(mode) + 1;
        setSerchParmas({ mode: nextMode, detail })
    }

    return (
        <div>
            <div>About</div>
            <p>react-router</p>
            <p>detail: {detail}</p>
            <p>mode: {mode}</p>
            <button onClick={onToggleDetail}>Toggle detail</button>
            <button onClick={onIncreaseMode}>mode + 1</button>
        </div>
    );
};

export default About;