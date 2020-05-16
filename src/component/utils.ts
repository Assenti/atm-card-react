export const creditMask = (value: string, hidden: boolean = false) => {
    if (value) {
        if (hidden) return [value.slice(0,4), '****', '****', value.slice(12,16)];
        return [value.slice(0,4), value.slice(4,8), value.slice(8,12), value.slice(12,16)];
    } else {
        if (hidden) return ['1234', '****', '****', '1234'];
        return ['1234','1234','1234','1234'];
    }
}

export const cvvMask = (value: string) => {
    if (value) {
        return `**${value.slice(2,3)}`;
    } else {
        return '000';
    }
}

export const strinfigyClassObject = (classObject: any) => {
    let result = '';
    for (const key in classObject) {
        if (classObject[key]) result += classObject[key] + ' '
    }
    return result.trim();
}