import * as React from 'react'
import { creditMask } from './utils';
import InputComponent from './InputComponent';

const NumberField = (props: any) => {
    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') props.onNumberEdit(false)
    }
    return (
        <div className="component-atm-card-number" 
            style={{ 
                    fontSize: (props.numberFontSize ? props.numberFontSize : 25) * (props.scale ? props.scale : 1),
                    fontFamily: props.fontFamily ? props.fontFamily : '',
                    color: props.dataColor ? props.dataColor : '' 
                }}>{
                !props.numberEdit ? 
                <div onClick={() => props.onNumberEdit(true)}>
                    {creditMask(props.number, props.hideDigits)
                    .map((item: string, index: number) => 
                    <div key={index}>{item}</div>)} 
                </div>
                :
                <InputComponent
                    fontSize={(props.numberFontSize ? props.numberFontSize : 25) * (props.scale ? props.scale : 1)}
                    fontFamily={props.fontFamily ? props.fontFamily : ''}
                    value={props.number}
                    onKeyPress={handleKeyPress}
                    maxLength={16}
                    scale={props.scale}
                    letterSpacing={`${4 * (props.scale ? props.scale : 1)}px`}
                    type="number"
                    onBlur={() => props.onNumberEdit(false)}
                    onChange={(value: any) => props.onChange(value, 'number')}/>
            }
            {props.numberEdit && 
                <span 
                    style={{ 
                        fontSize: 10 * (props.scale ? props.scale : 1
                        )}}>{props.number.length} / 16</span>}
        </div>
    )
}

export default NumberField;