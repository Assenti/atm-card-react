import * as React from 'react';
import { Rotate } from './icons';
import { MainCardDataProps } from '../index.d';
import DateField from './DateField';
import NumberField from './NumberField';
import HolderField from './HolderField';

const MainCardData = (props: MainCardDataProps) => {
    const card = React.useRef<any>(null);
    const [numberEdit, setNumberEdit] = React.useState<boolean>(false);
    const [holderEdit, setHolderEdit] = React.useState<boolean>(false);
    const [monthEdit, setMonthEdit] = React.useState<boolean>(false);
    const [yearEdit, setYearEdit] = React.useState<boolean>(false);

    const handleClick = (e: any) => {
        if (card.current.contains(e.target)) return;
        setNumberEdit(false);
        setMonthEdit(false);
        setYearEdit(false);
        setHolderEdit(false);
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
                height: 270 * (props.scale ? props.scale : 1),
                padding: 15 * (props.scale ? props.scale : 1)
            }}>
            <div className="component-atm-card-bank">{props.bankLogo}</div>
            <div className="component-atm-card-controls">
                <i onClick={() => props.onRotate()}>
                    <Rotate size={34 * (props.scale ? props.scale : 1)} color={props.dataColor ? props.dataColor : ''}/>
                </i>
            </div>
            
            <NumberField
                numberFontSize={props.numberFontSize}
                fontFamily={props.fontFamily}
                hideDigits={props.hideDigits}
                number={props.number}
                scale={props.scale}
                dataColor={props.dataColor}
                onChange={props.onChange}
                numberEdit={numberEdit}
                onNumberEdit={(flag: boolean) => setNumberEdit(flag)}/>

            <HolderField
                fontFamily={props.fontFamily}
                holderName={props.holderName}
                onHolderEdit={(flag: boolean) => setHolderEdit(flag)}
                holderEdit={holderEdit}
                scale={props.scale}
                dataColor={props.dataColor}
                onChange={props.onChange}/>

            <DateField
                fontFamily={props.fontFamily}
                year={props.year}
                month={props.month}
                onChange={props.onChange}
                scale={props.scale}
                monthEdit={monthEdit}
                yearEdit={yearEdit}
                onMonthEdit={(flag: boolean) => setMonthEdit(flag)} 
                onYearEdit={(flag: boolean) => setYearEdit(flag)} 
                dataColor={props.dataColor}/>
            <div className="component-atm-card-system-logo">{props.system}</div>
        </div>
    )
}
export default MainCardData;