import * as React from 'react'
import { creditMask } from './utils';
import { Edit } from './icons';

const NumberField = (props: any) => {
    return (
        <div className={props.numberEdit ? 'component-atm-card-number edit' : 'component-atm-card-number'} 
            style={{ 
                fontSize: 25 * (props.scale ? props.scale : 1),
                color: props.dataColor ? props.dataColor : '' 
            }}>{
                !props.numberEdit ? 
                creditMask(props.number, props.hideDigits) : 
                <input 
                    style={{ 
                        fontSize: 25 * (props.scale ? props.scale : 1),
                        color: props.dataColor ? props.dataColor : ''
                    }}
                    value={props.number}
                    maxLength={16}
                    onBlur={() => props.onNumberEdit(false)}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => props.onChange(e.target.value, 'number')}/>
            }
            <i onClick={() => props.onNumberEdit(true)}>
                <Edit size={26 * (props.scale ? props.scale : 1)} color={props.dataColor ? props.dataColor : ''}/>
            </i>
        </div>
    )
}

export default NumberField;