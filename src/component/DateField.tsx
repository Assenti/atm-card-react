import * as React from 'react';
import { Edit } from './icons';

const DateField = (props: any) => {
    return (
        <div className={props.dateEdit ? 'component-atm-card-date edit' : 'component-atm-card-date'} 
            style={{ 
                fontSize: 18 * (props.scale ? props.scale : 1),
                color: props.dataColor ? props.dataColor : ''
            }}>
            <div style={{ fontSize: 12  * (props.scale ? props.scale : 1) }}>VALID THRU</div>
            {!props.dateEdit ?
                props.date :
                <input 
                    style={{ 
                        fontSize: 18 * (props.scale ? props.scale : 1),
                        width: 80 * (props.scale ? props.scale : 1)
                    }}
                    value={props.date}
                    maxLength={5}
                    onBlur={() => props.onDateEdit(false)}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => props.onChange(e.target.value, 'date')}/>
            }
            <i onClick={() => props.onDateEdit(true)}>
                <Edit size={22 * (props.scale ? props.scale : 1)} color={props.dataColor ? props.dataColor : ''}/>
            </i>
        </div>
    )
}

export default DateField;