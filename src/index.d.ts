import * as React from 'react';
import ATMCard from './component';

export declare interface IconProps {
  size?: number,
  color?: string
}

export declare interface ATMCardProps {
  system?: string,
  bank?: React.ReactNode,
  holderName?: string,
  number?: string,
  expiredYear?: number,
  expiredMonth?: number,
  cvv?: string
  hideDigits?: boolean,
  dataColor?: string,
  scale?: ATMCardScale,
  bgImage?: string,
  bgColor?: string,
  id?: string,
  lifted?: boolean,
  className?: string,
  onChange?: Function,
  dark?: boolean
}

export declare interface MainCardDataProps {
  system?: React.ReactNode,
  bankLogo?: React.ReactNode,
  holderName: string,
  number: string,
  year: number,
  month: number,
  hideDigits?: boolean,
  dataColor?: string,
  scale?: ATMCardScale,
  image?: string,
  bgColor?: string,
  onChange: Function,
  onRotate: Function,
  dark?: boolean
}

export declare interface BackCardDataProps {
  cvv: string,
  bankLogo?: React.ReactNode,
  dataColor?: string,
  image?: string,
  scale?: ATMCardScale,
  bgColor?: string,
  system?: React.ReactNode,
  onChange: Function,
  onRotate: Function,
  dark?: boolean
}

export declare interface InputComponentProps {
  value: string | number,
  onChange: Function,
  onKeyPress: Function,
  onBlur: Function,
  fontSize: number,
  scale: number,
  width?: number | string,
  type: "number" | "text" | "password",
  maxLength?: number,
  letterSpacing?: string
}

declare module 'atm-card-react';

export default ATMCard;