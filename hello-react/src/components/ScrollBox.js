import { Component } from 'react';

class ScrollBox extends Component {
    render() {
        const style = {
            border: "1px solid black",
            height: '300px',
            width: "300px",
            overflow: "auto",
            position: "relative"
        }
        const innerStyle = {
            width: '100%',
            height: "650px",
            background: "linear-gradient(white, black)"
        }
        const test = (value) => {
            console.log(value)
        }
        return (
            <div
                style={style}
            // ref={(ref) => {
            //     this.box = ref
            // }}
            >
                <button
                    onClick={(v) => test('123')}
                >test</button>

                <div style={innerStyle}></div>
            </div>
        );
    }
}

export default ScrollBox;