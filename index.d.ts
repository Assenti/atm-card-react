import * as React from 'react';
import ATMCard from './src/component';

export declare interface IconProps {
  size?: number,
  color?: string
}

export declare type ATMCardScale = 0.5 | 0.6 | 0.7 | 0.8 | 0.9 | 1;

export declare interface ATMCardProps {
  systemLogo?: React.ReactNode,
  holderName?: string,
  number?: string,
  date?: string,
  cvv?: string
  hideDigits?: boolean,
  dataColor?: string,
  scale?: ATMCardScale,
  bgImage?: string,
  bgColor?: string,
  id?: string,
  lifted?: boolean,
  className?: string
}

export declare interface MainCardDataProps {
  systemLogo?: React.ReactNode,
  holderName: string,
  number: string,
  date: string,
  hideDigits?: boolean,
  dataColor?: string,
  scale?: ATMCardScale,
  image?: string,
  bgColor?: string,
  onChange: Function,
  onRotate: Function
}

export declare interface BackCardDataProps {
  cvv: string,
  dataColor?: string,
  image?: string,
  scale?: ATMCardScale,
  bgColor?: string,
  systemLogo?: React.ReactNode,
  onRotate: Function
}

declare module 'atm-card-react';

export default ATMCard;