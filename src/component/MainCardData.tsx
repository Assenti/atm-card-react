import * as React from 'react';
import { creditMask } from './utils';
import { Rotate, Edit, MasterCardLogo, VisaLogo, MaestroLogo } from './icons';
import { MainCardDataProps } from '../index.d';

const MainCardData = (props: MainCardDataProps) => {
    const card = React.useRef<any>(null);
    const [numberEdit, setNumberEdit] = React.useState<boolean>(false);
    const [holderEdit, setHolderEdit] = React.useState<boolean>(false);
    const [dateEdit, setDateEdit] = React.useState<boolean>(false);

    const handleClick = (e: any) => {
        if (card.current.contains(e.target)) return;
        setNumberEdit(false);
        setDateEdit(false);
        setHolderEdit(false);
    }

    const getSystemLogo = () => {
        switch (props.system) {
            case 'mastercard':
                return <MasterCardLogo size={80 * (props.scale ? props.scale : 1)}/>;
            case 'visa':
                return <VisaLogo size={80 * (props.scale ? props.scale : 1)}/>;
            case 'maestro':
                return <MaestroLogo size={65 * (props.scale ? props.scale : 1)}/>
            default:
                return null;
        }
    }

    React.useEffect(() => {
        if (props.number.length === 16) setNumberEdit(false)
        document.addEventListener('mousedown', handleClick, true);

        return () => {
            document.removeEventListener("mousedown", handleClick, true);
        }
    }, [props.number])

    return (
        <div className="component-atm-card"
            ref={card} 
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
                    <Edit size={26 * (props.scale ? props.scale : 1)} color={props.dataColor ? props.dataColor : ''}/>
                </i>
            </div>
            <div className={holderEdit ? 'component-atm-card-holder edit' : 'component-atm-card-holder'} 
                style={{ 
                    fontSize: 25 * (props.scale ? props.scale : 1),
                    color: props.dataColor ? props.dataColor : '' 
                }}>{!holderEdit ?
                    props.holderName :
                    <input 
                        style={{ fontSize: 25 * (props.scale ? props.scale : 1) }}
                        value={props.holderName}
                        onBlur={() => setHolderEdit(false)}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => props.onChange(e.target.value, 'holderName')}/>
                    }
                <i onClick={() => setHolderEdit(true)}>
                    <Edit size={22 * (props.scale ? props.scale : 1)} color={props.dataColor ? props.dataColor : ''}/>
                </i>
            </div>
            <div className={dateEdit ? 'component-atm-card-date edit' : 'component-atm-card-date'} 
                style={{ 
                    fontSize: 18 * (props.scale ? props.scale : 1),
                    color: props.dataColor ? props.dataColor : ''
                }}>{!dateEdit ?
                    props.date :
                    <input 
                        style={{ 
                            fontSize: 18 * (props.scale ? props.scale : 1),
                            width: 80 * (props.scale ? props.scale : 1)
                        }}
                        value={props.date}
                        maxLength={5}
                        onBlur={() => setDateEdit(false)}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => props.onChange(e.target.value, 'date')}/>
                }
                <i onClick={() => setDateEdit(true)}>
                    <Edit size={22 * (props.scale ? props.scale : 1)} color={props.dataColor ? props.dataColor : ''}/>
                </i>
            </div>
            <div className="component-atm-card-system-logo">{getSystemLogo()}</div>
        </div>
    )
}
export default MainCardData;