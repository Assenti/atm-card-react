import * as React from 'react';
import InputComponent from './InputComponent';

const DateField = (props: any) => {
    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') props.onDateEdit(false)
    }

    React.useEffect(() => {
        if (props.date.length === 5) props.onDateEdit(false)
    }, [props.date])

    return (
        <div className="component-atm-card-date" 
            style={{ 
                fontSize: 18 * (props.scale ? props.scale : 1),
                color: props.dataColor ? props.dataColor : ''
            }}>
            <div style={{ fontSize: 12  * (props.scale ? props.scale : 1) }}>VALID THRU</div>
            {!props.dateEdit ?
                <span onClick={() => props.onDateEdit(true)}>{props.date}</span> :
                <InputComponent
                    width={80 * (props.scale ? props.scale : 1)}
                    fontSize={18 * (props.scale ? props.scale : 1)}
                    value={props.date}
                    scale={props.scale}
                    type="text"
                    onKeyPress={handleKeyPress}
                    onBlur={() => props.onDateEdit(false)}
                    onChange={(value: any) => props.onChange(value, 'date')}
                    maxLength={5}/>
            }
        </div>
    )
}

export default DateField;