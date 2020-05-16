import * as React from 'react';
import { Rotate } from './icons';
import { cvvMask } from './utils';
import { BackCardDataProps } from '../index.d';
import InputComponent from './InputComponent';

const BackCardData = (props: BackCardDataProps) => {
    const card = React.useRef<any>();
    const [cvvEdit, setCvvEdit] = React.useState<boolean>(false);
    const cvvInput = React.useRef<HTMLInputElement>(null);

    const handleClick = (e: any) => {
        if (card.current.contains(e.target)) return;
        setCvvEdit(false);
    }

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') setCvvEdit(false)
    }

    React.useEffect(() => {
        if (props.cvv.length === 3) setCvvEdit(false);

        document.addEventListener('mousedown', handleClick, true);

        return () => {
            document.removeEventListener("mousedown", handleClick, true);
        }
    }, [props.cvv])

    return (
        <div className="component-atm-card back"
            ref={card} 
            style={{ 
                backgroundImage: `url(${props.image ? props.image : ''})`,
                backgroundColor: props.bgColor ? props.bgColor : '',
                width: 430 * (props.scale ? props.scale : 1),
                height: 270 * (props.scale ? props.scale : 1),
                padding: 15 * (props.scale ? props.scale : 1)
            }}>
            <div className="component-atm-card-controls">
                <i onClick={() => props.onRotate()}>
                    <Rotate size={34 * (props.scale ? props.scale : 1)} color={props.dataColor ? props.dataColor : ''}/>
                </i>
            </div>
            <div className={props.dark ? 'component-atm-card-magnet dark' : 'component-atm-card-magnet'} 
                style={{ height: 60 * (props.scale ? props.scale : 1)}}/>
            <div className="component-atm-card-bank-back">{props.bankLogo}</div>
            <div className="component-atm-card-cvv"
                style={{ 
                    fontSize: 25 * (props.scale ? props.scale : 1),
                    fontFamily: props.fontFamily ? props.fontFamily : '',
                    color: props.dataColor ? props.dataColor : '' 
                }}>
                <span style={{ fontSize: 18 * (props.scale ? props.scale : 1) }}>CVV CODE:</span>
                {!cvvEdit ?
                    <div onClick={() => {
                        setCvvEdit(true)
                        cvvInput.current?.focus()
                    }}>{cvvMask(props.cvv)}</div> :
                    <InputComponent
                        type="number"
                        fontFamily={props.fontFamily ? props.fontFamily : ''}
                        fontSize={25 * (props.scale ? props.scale : 1)}
                        onBlur={() => setCvvEdit(false)}
                        value={props.cvv}
                        scale={props.scale}
                        onKeyPress={handleKeyPress}
                        onChange={(value: any) => props.onChange(value, 'cvv')}/>
                }
            </div>
            <div className="component-atm-card-system-logo">{props.system}</div>
        </div>
    )
}
export default BackCardData;