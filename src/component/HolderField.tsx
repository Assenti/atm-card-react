import * as React from 'react';
import InputComponent from './InputComponent';

const HolderField = (props: any) => {
    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') props.onHolderEdit(false)
    }

    return (
        <div className={props.holderEdit ? 'component-atm-card-holder edit' : 'component-atm-card-holder'} 
            style={{ 
                    fontSize: 24 * (props.scale ? props.scale : 1),
                    color: props.dataColor ? props.dataColor : '' 
                }}>
                {!props.holderEdit ?
                <div onClick={() => props.onHolderEdit(true)}>{props.holderName}</div> :
                <InputComponent
                    scale={props.scale}
                    value={props.holderName}
                    onKeyPress={handleKeyPress}
                    type="text"
                    fontSize={24 * (props.scale ? props.scale : 1)}
                    onBlur={() => props.onHolderEdit(false)}
                    onChange={(value: any) => props.onChange(value, 'holderName')}/>}
        </div>
    )
}

export default HolderField;