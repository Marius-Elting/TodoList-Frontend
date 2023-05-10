import { RefObject } from 'react';
import { IDisabled } from './IDisabled';

export interface IDateField extends IDisabled {
    value?: Date | null;
    reference: RefObject<HTMLInputElement> | undefined
}