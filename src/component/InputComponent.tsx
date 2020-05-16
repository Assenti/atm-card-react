import * as React from 'react';
import { InputComponentProps } from '../index.d';

const InputComponent = (props: InputComponentProps) => {
    const inputRef = React.useRef<HTMLInputElement>(null);

    React.useEffect(() => {
        if (inputRef.current) inputRef.current.focus();
    }, [])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (props.type === 'number') e.target.value ? props.onChange(e.target.value) : props.onChange('0');
        else props.onChange(e.target.value);
    }

    return (
        <input 
            style={{ 
                fontSize: props.fontSize, 
                fontFamily: props.fontFamily,
                width: props.width ? props.width : '',
                letterSpacing: props.letterSpacing
            }}
            value={props.value}
            onKeyPress={e => props.onKeyPress(e)}
            ref={inputRef}
            type={props.type}
            onBlur={() => props.onBlur()}
            onChange={handleChange}/>
    )
}

export default InputComponent;