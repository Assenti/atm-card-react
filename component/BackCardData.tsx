import * as React from 'react';
import { Rotate } from './icons';
import { cvvMask } from './utils';
import { BackCardDataProps } from '..';

const BackCardData = (props: BackCardDataProps) => {
    const [main, setMain] = React.useState<boolean>(false);

    return (
        <div className="component-atm-card back" 
            style={{ 
                backgroundImage: `url(${props.image ? props.image : ''})`,
                backgroundColor: props.bgColor ? props.bgColor : '',
                width: 430 * (props.scale ? props.scale : 1),
                height: 270 * (props.scale ? props.scale : 1)
            }}>
            <div className="component-atm-card-controls">
                <i onClick={() => props.onRotate()}>
                    <Rotate size={34 * (props.scale ? props.scale : 1)} color={props.dataColor ? props.dataColor : ''}/>
                </i>
            </div>
            <div className="component-atm-card-magnet" style={{ height: 60 * (props.scale ? props.scale : 1)}}/>
            <div className="component-atm-card-holder" 
                style={{ 
                    fontSize: 25 * (props.scale ? props.scale : 1),
                    color: props.dataColor ? props.dataColor : '' 
                }}>CVV CODE: {cvvMask(props.cvv)}</div>
            <div className="component-atm-card-system-logo">{props.systemLogo}</div>
        </div>
    )
}
export default BackCardData;