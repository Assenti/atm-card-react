import * as React from "react";
import * as ReactDOM from "react-dom";
import ATMCard from './component';

const App: React.FC = () => {
    return (
        <div style={{ 
            width: '100%',
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center' 
         }}><ATMCard
                number="1234567890101112"
                holderName="John Doe"
                date="01/20"
                cvv="019"
                hideDigits
                lifted
                scale={1}/></div>
    )
}

ReactDOM.render(<App/>,document.getElementById("atm-card-react"));