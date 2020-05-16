import * as React from 'react';
import '../styles/index.css';
import { strinfigyClassObject } from './utils';
import MainCardData from './MainCardData';
import BackCardData from './BackCardData';
import { ATMCardProps } from '../index.d';
import { MasterCardLogo, VisaLogo, MaestroLogo, AmericanExpressLogo, JCBLogo, DinersClubLogo, MirLogo } from './icons';

const ATMCard = React.forwardRef((props: ATMCardProps, ref) => {
    const [main, setMain] = React.useState<boolean>(true);
    const [number, setNumber] = React.useState<string>(props.number ? props.number : '');
    const [year, setYear] = React.useState<number>(props.expiredYear ? props.expiredYear : 0);
    const [month, setMonth] = React.useState<number>(props.expiredMonth ? props.expiredMonth : 0);
    const [holderName, setHolderName] = React.useState<string>(props.holderName ? props.holderName : '');
    const [cvv, setCvv] = React.useState<string>(props.cvv ? props.cvv : '');

    let className = {
        name: 'component-atm-card-container',
        lifted: props.lifted ? 'lifted' : '',
        className: props.className ? props.className : ''
    }

    const handleRotate = () => setMain(!main)

    const handleChange = (value: string, field: string) => {
        switch (field) {
            case 'number':
                if (props.onChange) props.onChange({ number: value, month, year, holder: holderName, cvv })
                if (value.length <= 16) setNumber(value);
                break;
            case 'month':
                if (props.onChange) {
                    if (value.length <= 2) {
                        props.onChange({ number, month: parseInt(value), year, holder: holderName, cvv })
                        setMonth(parseInt(value));
                    }
                }
                break;
            case 'year':
                if (props.onChange) {
                    if (value.length <= 2) {
                        setYear(parseInt(value))
                        props.onChange({ number, year: parseInt(value), month, holder: holderName, cvv })
                    }
                }
                break;
            case 'holderName':
                if (props.onChange) props.onChange({ number, month, year, holder: value, cvv })
                setHolderName(value ? value.toUpperCase() : '');
                break;
            case 'cvv':
                if (props.onChange) props.onChange({ number, month, year, holder: holderName, cvv: value })
                if (value.length <= 3) setCvv(value);
                break;
            default:
                break;
        }
    }

    const getSystemLogo = () => {
        switch (props.system) {
            case 'mastercard':
                return <MasterCardLogo size={80 * (props.scale ? props.scale : 1)}/>;
            case 'visa':
                return <VisaLogo size={80 * (props.scale ? props.scale : 1)}/>;
            case 'maestro':
                return <MaestroLogo size={65 * (props.scale ? props.scale : 1)}/>;
            case 'americanexpress':
                return <AmericanExpressLogo size={100 * (props.scale ? props.scale : 1)}/>;
            case 'jcb':
                return <JCBLogo size={70 * (props.scale ? props.scale : 1)}/>;
            case 'dinersclub':
                return <DinersClubLogo size={70 * (props.scale ? props.scale : 1)}/>;
            case 'mir':
                return <MirLogo size={100 * (props.scale ? props.scale : 1)}/>;
            default:
                return null;
        }
    }

    return (
        <div className={strinfigyClassObject(className)} 
            id={props.id ? props.id : ''}
            ref={(ref as any)}>
            {main ? 
            <MainCardData
                numberFontSize={props.numberFontSize}
                fontFamily={props.fontFamily}
                bankLogo={props.bank}
                system={getSystemLogo()}
                image={props.bgImage}
                bgColor={props.bgColor}
                hideDigits={props.hideDigits}
                onRotate={handleRotate}
                dataColor={props.dataColor}
                number={number}
                holderName={holderName}
                month={month}
                year={year}
                dark={props.dark}
                scale={props.scale}
                onChange={handleChange}/> :
            <BackCardData
                fontFamily={props.fontFamily}
                onRotate={handleRotate}
                dataColor={props.dataColor}
                cvv={cvv}
                dark={props.dark}
                bankLogo={props.bank}
                system={getSystemLogo()}
                onChange={handleChange}
                image={props.bgImage}
                bgColor={props.bgColor}
                scale={props.scale}/>}
        </div>
    )
})
export default ATMCard;