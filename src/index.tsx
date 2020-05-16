import * as React from "react";
import * as ReactDOM from "react-dom";
import ATMCard from './component';
import Image from './image.jpg';

const App: React.FC = () => {
    const systems: any = ['mastercard','maestro','visa','americanexpress','jcb','dinersclub','mir'];
    const numbers = [0.5,0.6,0.7,0.8,0.9,1];
    const [scale, setScale] = React.useState<any>(0.9);
    const [system, setSystem] = React.useState<string>(systems[0]);

    const BankLogo = () => <h1 style={{ fontFamily: 'Arial', fontSize: 30 * scale, color: 'white' }}>Cool Bank Logo</h1>;

    return (
        <div style={{ 
            width: '100%',
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center' 
         }}>
            <h1 style={{ fontFamily: 'sans-serif' }}>ATM Card - React Component</h1>
            <div style={{ display: 'flex', alignItems: 'center', fontFamily: 'sans-serif' }}>
                Scale ({scale}) :  0.5
                <input 
                    style={{
                        margin: '10px',
                        display: 'block',
                        width: 250
                    }}
                    value={scale}
                    onChange={e => setScale(numbers.includes(parseFloat(e.target.value)) ? parseFloat(e.target.value) : 1)}
                    type="range" 
                    min={0.5} 
                    max={1} 
                    step={0.1}/>
                1
            </div>
            <p style={{ textAlign: 'center' }}>
                <select onChange={e => setSystem(e.target.value)}>
                    {systems.map((item, index) => <option key={index} value={item}>{item}</option>)}
                </select>
            </p>
            <ATMCard
                expiredYear={22}
                expiredMonth={1}
                cvv="019"
                bank={<BankLogo/>}
                bgImage={Image}
                lifted
                system={system}
                scale={scale}
                onChange={(data: any) => console.log(data)}/>
            <br/>
            <ATMCard
                expiredYear={22}
                expiredMonth={11}
                cvv="019"
                bank={<BankLogo/>}
                hideDigits
                bgColor="#2d2d2d"
                dataColor="silver"
                dark
                lifted
                system={system}
                scale={scale}
                onChange={(data: any) => console.log(data)}/>
            <br/>
            <ATMCard
                expiredYear={22}
                expiredMonth={11}
                cvv="019"
                bank={<BankLogo/>}
                hideDigits
                lifted
                system={system}
                scale={scale}
                onChange={(data: any) => console.log(data)}/>
            <br/>
            <ATMCard
                expiredYear={22}
                expiredMonth={11}
                cvv="019"
                bank={<BankLogo/>}
                hideDigits
                lifted
                bgColor="silver"
                system={system}
                scale={scale}
                onChange={(data: any) => console.log(data)}/>
        </div>
    )
}

ReactDOM.render(<App/>,document.getElementById("atm-card-react"));