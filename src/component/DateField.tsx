import * as React from 'react';
import InputComponent from './InputComponent';

const DateField = (props: any) => {
    const { month, year, onMonthEdit, onYearEdit } = props;
    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            onYearEdit(false)
            onMonthEdit(false)
        }
    }

    React.useEffect(() => {
        if (month.toString().length === 2) onMonthEdit(false)
        if (year.toString().length === 2) onYearEdit(false)
    }, [month, year])

    return (
        <div className="component-atm-card-date" 
            style={{ 
                fontSize: 16 * (props.scale ? props.scale : 1),
                color: props.dataColor ? props.dataColor : ''
            }}>
            <div style={{ fontSize: 12  * (props.scale ? props.scale : 1) }}>VALID THRU</div>
            <div className="expired-dates">
                {!props.monthEdit ? 
                <span onClick={() => props.onMonthEdit(true)}>
                    {!!props.month.toString() ? props.month : '00'}
                </span> :
                <InputComponent
                    width={34 * (props.scale ? props.scale : 1)}
                    fontSize={16 * (props.scale ? props.scale : 1)}
                    value={props.month}
                    scale={props.scale}
                    type="number"
                    onKeyPress={handleKeyPress}
                    onBlur={() => props.onMonthEdit(false)}
                    onChange={(value: any) => props.onChange(value, 'month')}/>}
                /
                {!props.yearEdit ?
                <span onClick={() => props.onYearEdit(true)}>{props.year}</span> :
                <InputComponent
                    width={34 * (props.scale ? props.scale : 1)}
                    fontSize={16 * (props.scale ? props.scale : 1)}
                    value={props.year}
                    scale={props.scale}
                    type="number"
                    onKeyPress={handleKeyPress}
                    onBlur={() => props.onYearEdit(false)}
                    onChange={(value: any) => props.onChange(value, 'year')}/>}
            </div>
        </div>
    )
}

export default DateField;