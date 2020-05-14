# ATM CARD - React component

## Install
```bash
# Install package from NPM
% npm install atm-card-react -S

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
    const [date, setDate] = useState<string>('');
    const [holder, setHolder] = useState<string>('');
    const [cvv, setCvv] = useState<string>('');

    return (
        <>
            <ATMCard
                number={number}
                date={date}
                holder={holder}
                cvv={cvv}>
        </>
    );
}
export default App;
```

### License

[MIT Licensed](/LICENSE)
Copyright (c) 2020 Asset Sultanov