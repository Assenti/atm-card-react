import React from "react";
import ReactDOM from "react-dom";
import ATMCard from './component';

const App: React.FC = () => {
    const systems: any = ['mastercard','maestro','visa','americanexpress','jcb','dinersclub','mir'];
    const numbers = [0.5,0.6,0.7,0.8,0.9,1];
    const [scale, setScale] = React.useState<any>(0.9);
    const [system, setSystem] = React.useState<string>(systems[0]);

    // ATM Card data vars
    const [number, setNumber] = React.useState<string>('');
    const [holder, setHolder] = React.useState<string>('');
    const [cvv, setCvv] = React.useState<string>('');
    const [month, setMonth] = React.useState<number>(1);
    const [year, setYear] = React.useState<number>(21);

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
                year={year}
                month={month}
                cvv={cvv}
                number={number}
                holderName={holder}
                bankLogo={<BankLogo/>}
                bgImage="https://images.unsplash.com/photo-1519335337423-a3357c2cd12e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                lifted
                system={system}
                scale={scale}
                onChange={(data) => {
                    setNumber(data.number);
                    setCvv(data.cvv);
                    setMonth(data.month);
                    setYear(data.year);
                    setHolder(data.holder);
                }}/>
            <br/>
            <ATMCard
                year={year}
                month={month}
                cvv={cvv}
                number={number}
                holderName={holder}
                bankLogo={<BankLogo/>}
                hideDigits
                bgColor="#2d2d2d"
                dataColor="silver"
                dark
                lifted
                system={system}
                scale={scale}
                onChange={(data) => {
                    setNumber(data.number);
                    setCvv(data.cvv);
                    setMonth(data.month);
                    setYear(data.year);
                    setHolder(data.holder);
                }}/>
            <br/>
            <ATMCard
                year={year}
                month={month}
                cvv={cvv}
                number={number}
                holderName={holder}
                bankLogo={<BankLogo/>}
                hideDigits
                lifted
                system={system}
                scale={scale}
                onChange={(data) => {
                    setNumber(data.number);
                    setCvv(data.cvv);
                    setMonth(data.month);
                    setYear(data.year);
                    setHolder(data.holder);
                }}/>
            <br/>
            <ATMCard
                year={year}
                month={month}
                cvv={cvv}
                number={number}
                holderName={holder}
                bankLogo={<BankLogo/>}
                hideDigits
                lifted
                bgColor="silver"
                system={system}
                scale={scale}
                onChange={(data) => {
                    setNumber(data.number);
                    setCvv(data.cvv);
                    setMonth(data.month);
                    setYear(data.year);
                    setHolder(data.holder);
                }}/>
        </div>
    )
}

ReactDOM.render(<App/>,document.getElementById("atm-card-react"));