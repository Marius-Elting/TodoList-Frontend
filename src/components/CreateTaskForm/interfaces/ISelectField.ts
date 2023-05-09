import { RefObject } from "react";
import { IDisabled } from "./IDisabled";

export interface ISelectItems {
    value: string;
    label: string;
}

export interface ISelectField extends IDisabled {
    name?: string;
    label?: string;
    value?: string;
    items?: ISelectItems[];
    reference: RefObject<HTMLSelectElement> | undefined

}