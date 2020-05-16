import * as React from 'react';
import { InputComponentProps } from '../index.d';

const InputComponent = (props: InputComponentProps) => {
    const inputRef = React.useRef<HTMLInputElement>(null);

    React.useEffect(() => {
        if (inputRef.current) inputRef.current.focus();
    }, [])

    return (
        <input 
            style={{ fontSize: props.fontSize, width: props.width ? props.width : '' }}
            value={props.value}
            onKeyPress={e => props.onKeyPress(e)}
            ref={inputRef}
            type={props.type}
            onBlur={() => props.onBlur()}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => props.onChange(e.target.value)}/>
    )
}

export default InputComponent;