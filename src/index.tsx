import * as React from "react";
import * as ReactDOM from "react-dom";
import ATMCard from './component';
import { VisaLogo } from "./component/icons";

const App: React.FC = () => {
    const systems = ['mastercard','maestro','visa','americanexpress','jcb','dinersclub','mir'];
    const numbers = [0.5,0.6,0.7,0.8,0.9,1];
    const [scale, setScale] = React.useState<any>(1);
    const [system, setSystem] = React.useState<string>(systems[0]);

    return (
        <div style={{ 
            width: '100%',
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center' 
         }}>
            <h4 style={{ fontFamily: 'sans-serif' }}>Set ATM Card scale</h4>
            <div style={{ display: 'flex', alignItems: 'center', fontFamily: 'sans-serif' }}>
                0.5
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
            <br/>
            <div style={{ display: 'flex', alignItems: 'center', fontFamily: 'sans-serif' }}>
                <select onChange={e => setSystem(e.target.value)}>
                    {systems.map((item, index) => <option key={index} value={item}>{item}</option>)}
                </select>
            </div>
            <br/>
            <ATMCard
                bankLogo={<VisaLogo size={80}/>}
                number="1234567890101112"
                holderName="John Doe"
                date="01/20"
                cvv="019"
                hideDigits
                lifted
                system={system}
                scale={scale}
                onChange={(data: any) => console.log(data)}/>
        </div>
    )
}

ReactDOM.render(<App/>,document.getElementById("atm-card-react"));