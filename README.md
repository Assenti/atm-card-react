# ATM CARD - React component

## Install
```bash
# Install package from NPM
% npm install atm-card-react

# or

# Install package from NPM
% yarn add atm-card-react
```

## Usage
```jsx
// Functional component example
import React, { useState } from 'react';
import ATMCard from 'atm-card-react';

function App() {
    const [number, setNumber] = useState<string>('');
    const [month, setMonth] = useState<string>('');
    const [year, setYear] = useState<string>('');
    const [holder, setHolder] = useState<string>('');
    const [cvv, setCvv] = useState<string>('');

    return (
        <>
            <ATMCard
                number={number}
                month={month}
                year={year}
                holder={holder}
                cvv={cvv}>
        </>
    );
}
export default App;
```

## Props
| Prop | Type | Value | Description |
| --- | --- | --- | --- |
| number | string | 1234123412341234 | ATM Card number (PAN) |
| expiredMonth | string | 01 |ATM Card expired month |
| expiredYear | string | 01 | ATM Card expired year |
| holder | string | John Doe |ATM Card holder name |
| cvv | string | 000 | ATM Card cvv/cvv2 code |
| bank | ReactNode | | ATM Card bank issuer data |
| system | string | ENUM | mastercard, visa, maestro, americanexpress, jcb, dinnersclub, mir | ATM Card payment system |
| hideDigits | boolean | true/false | Hide ATM Card number |
| onChange | function | | return { cvv, holder, month, number, year } |
| scale | number | 0 - 1 | Set ATM Card scale |
| dark | boolean | true/false | Dark mode (applied only for back side magnet) |
| dataColor | string | hex, rgb(-a) | Data text color |
| bgColor | string | hex, rgb(-a) | Background color |
| bgImage | string | base64/url | Background image |
| lifted | boolean | true/false | Elevate ATM Card |

### License

[MIT Licensed](/LICENSE)
Copyright (c) 2020 Asset Sultanov