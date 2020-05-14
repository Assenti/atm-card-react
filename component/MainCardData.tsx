import * as React from 'react';
import { creditMask } from './utils';
import { Rotate, Edit } from './icons';
import { MainCardDataProps } from '..';

const MainCardData = (props: MainCardDataProps) => {
    const [numberEdit, setNumberEdit] = React.useState<boolean>(false);

    React.useEffect(() => {
        if (props.number.length === 16) setNumberEdit(false)
    }, [props.number])

    return (
        <div className="component-atm-card" 
            style={{ 
                backgroundImage: props.image ? `url(${props.image})` : '',
                backgroundColor: props.bgColor ? props.bgColor : '',
                width: 430 * (props.scale ? props.scale : 1),
                height: 270 * (props.scale ? props.scale : 1)
            }}>
            <div className="component-atm-card-controls">
                <i onClick={() => props.onRotate()}>
                    <Rotate size={34 * (props.scale ? props.scale : 1)} color={props.dataColor ? props.dataColor : ''}/>
                </i>
            </div>
            <div className={numberEdit ? 'component-atm-card-number edit' : 'component-atm-card-number'} 
                style={{ 
                    fontSize: 25 * (props.scale ? props.scale : 1),
                    color: props.dataColor ? props.dataColor : '' 
                }}>{
                    !numberEdit ? 
                    creditMask(props.number, props.hideDigits) : 
                    <input 
                        style={{ fontSize: 25 * (props.scale ? props.scale : 1) }}
                        value={props.number}
                        maxLength={16}
                        onBlur={() => setNumberEdit(false)}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => props.onChange(e.target.value, 'number')}/>
                }
                <i onClick={() => setNumberEdit(true)}>
                    <Edit size={28 * (props.scale ? props.scale : 1)} color={props.dataColor ? props.dataColor : ''}/>
                </i>
            </div>
            <div className="component-atm-card-holder" 
                style={{ 
                    fontSize: 25 * (props.scale ? props.scale : 1),
                    color: props.dataColor ? props.dataColor : '' 
                }}>{props.holderName}</div>
            <div className="component-atm-card-date" 
                style={{ 
                    fontSize: 18 * (props.scale ? props.scale : 1),
                    color: props.dataColor ? props.dataColor : ''
                }}>{props.date}</div>
            <div className="component-atm-card-system-logo">{props.systemLogo}</div>
        </div>
    )
}
export default MainCardData;