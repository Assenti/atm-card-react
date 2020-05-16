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
  date?: string,
  cvv?: string
  hideDigits?: boolean,
  dataColor?: string,
  scale?: ATMCardScale,
  bgImage?: string,
  bgColor?: string,
  id?: string,
  lifted?: boolean,
  className?: string,
  onChange?: Function
}

export declare interface MainCardDataProps {
  system?: React.ReactNode,
  bankLogo?: React.ReactNode,
  holderName: string,
  number: string,
  date: string,
  hideDigits?: boolean,
  dataColor?: string,
  scale?: ATMCardScale,
  image?: string,
  bgColor?: string,
  onChange: Function,
  onRotate: Function,

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
  onRotate: Function
}

declare export interface InputComponentProps {
  value: string | number,
  onChange: Function,
  onKeyPress: Function,
  onBlur: Function,
  fontSize: number,
  scale: number,
  width?: number,
  type: "number" | "text" | "password",
  maxLength?: number
}

declare module 'atm-card-react';

export default ATMCard;