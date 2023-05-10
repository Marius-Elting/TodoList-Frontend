import { IDisabled } from "./IDisabled";
import { RefObject } from "react";

export interface ITextField extends IDisabled {
    reference: RefObject<HTMLInputElement> | undefined
}