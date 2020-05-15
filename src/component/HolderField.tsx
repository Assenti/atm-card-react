import * as React from 'react'
import { Edit } from './icons';

const HolderField = (props: any) => {
    return (
        <div className={props.holderEdit ? 'component-atm-card-holder edit' : 'component-atm-card-holder'} 
            style={{ 
                fontSize: 25 * (props.scale ? props.scale : 1),
                color: props.dataColor ? props.dataColor : '' 
            }}>{!props.holderEdit ?
                props.holderName :
                <input 
                    style={{ 
                        fontSize: 25 * (props.scale ? props.scale : 1),
                        color: props.dataColor ? props.dataColor : '' 
                    }}
                    value={props.holderName}
                    onBlur={() => props.onHolderEdit(false)}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => props.onChange(e.target.value, 'holderName')}/>
                }
            <i onClick={() => props.onHolderEdit(true)}>
                <Edit size={22 * (props.scale ? props.scale : 1)} color={props.dataColor ? props.dataColor : ''}/>
            </i>
        </div>
    )
}

export default HolderField;