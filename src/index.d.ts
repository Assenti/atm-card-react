import * as React from 'react';

export declare interface IconProps {
  size?: number;
  color?: string;
}

export declare type ATMCardSystem = 'mastercard' | 'maestro' | 'visa' | 'americanexpress' | 'jcb' | 'dinersclub' | 'mir';

export declare interface ATMCardProps extends MainCardDataProps {
  cvv?: string;
  bgImage?: string;
  id?: string;
  lifted?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export declare interface MainCardDataProps {
  fontFamily?: string;
  system?: React.ReactNode;
  bankLogo?: React.ReactNode;
  holderName?: string;
  number?: string;
  year: number;
  month: number;
  hideDigits?: boolean;
  dataColor?: string;
  scale?: ATMCardScale;
  bgImage?: string;
  bgColor?: string;
  onChange: Function;
  onRotate?: Function;
  dark?: boolean;
  numberFontSize?: number;
}

export declare interface BackCardDataProps {
  fontFamily?: string;
  cvv: string;
  bankLogo?: React.ReactNode;
  dataColor?: string;
  bgImage?: string;
  scale?: ATMCardScale;
  bgColor?: string;
  system?: React.ReactNode;
  onChange: Function;
  onRotate?: Function;
  dark?: boolean;
}

export declare interface InputComponentProps {
  fontFamily?: string;
  value: string | number;
  onChange: Function;
  onKeyPress: Function;
  onBlur: Function;
  fontSize: number;
  scale: number;
  width?: number | string;
  type: "number" | "text" | "password";
  maxLength?: number;
  letterSpacing?: string;
}

export declare const ATMCard: React.FC<ATMCardProps>;