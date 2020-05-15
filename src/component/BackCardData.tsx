import * as React from 'react';
import { Rotate, Edit } from './icons';
import { cvvMask } from './utils';
import { BackCardDataProps } from '../index.d';

const BackCardData = (props: BackCardDataProps) => {
    const card = React.useRef<any>();
    const [cvvEdit, setCvvEdit] = React.useState<boolean>(false);

    const handleClick = (e: any) => {
        if (card.current.contains(e.target)) return;
        setCvvEdit(false);
    }

    React.useEffect(() => {
        if (props.cvv.length === 3) setCvvEdit(false)
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
                height: 270 * (props.scale ? props.scale : 1)
            }}>
            <div className="component-atm-card-controls">
                <i onClick={() => props.onRotate()}>
                    <Rotate size={34 * (props.scale ? props.scale : 1)} color={props.dataColor ? props.dataColor : ''}/>
                </i>
            </div>
            <div className="component-atm-card-magnet" style={{ height: 60 * (props.scale ? props.scale : 1)}}/>
            <div className={cvvEdit ? 'component-atm-card-cvv edit' : 'component-atm-card-cvv'} 
                style={{ 
                    fontSize: 25 * (props.scale ? props.scale : 1),
                    color: props.dataColor ? props.dataColor : '' 
                }}>
                {!cvvEdit ?
                    `CVV CODE: ${cvvMask(props.cvv)}` :
                    <input 
                        style={{ fontSize: 25 * (props.scale ? props.scale : 1) }}
                        value={props.cvv}
                        max={999}
                        type="number"
                        onBlur={() => setCvvEdit(false)}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => props.onChange(e.target.value, 'cvv')}/>
                }
                <i onClick={() => setCvvEdit(true)}>
                    <Edit size={22 * (props.scale ? props.scale : 1)} color={props.dataColor ? props.dataColor : ''}/>
                </i>
            </div>
            <div className="component-atm-card-system-logo">{props.systemLogo}</div>
        </div>
    )
}
export default BackCardData;