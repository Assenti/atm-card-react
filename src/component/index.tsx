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
    const [date, setDate] = React.useState<string>(props.date ? props.date : '');
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
                if (props.onChange) props.onChange({ number: value, date, holder: holderName, cvv })
                setNumber(value);
                break;
            case 'date':
                if (props.onChange) props.onChange({ number, date: value, holder: holderName, cvv })
                setDate(value);
                break;
            case 'holderName':
                if (props.onChange) props.onChange({ number, date, holder: value, cvv })
                setHolderName(value ? value.toUpperCase() : '');
                break;
            case 'cvv':
                if (props.onChange) props.onChange({ number, date, holder: holderName, cvv: value })
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
                bankLogo={props.bank}
                system={getSystemLogo()}
                image={props.bgImage}
                bgColor={props.bgColor}
                hideDigits={props.hideDigits}
                onRotate={handleRotate}
                dataColor={props.dataColor}
                number={number}
                holderName={holderName}
                date={date}
                scale={props.scale}
                onChange={handleChange}/> :
            <BackCardData
                onRotate={handleRotate}
                dataColor={props.dataColor}
                cvv={cvv}
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