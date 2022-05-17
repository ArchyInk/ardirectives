import { LoadingOptions } from "./Loading";
import type { Directive } from 'vue';
export declare type LoadingBinding = boolean | {
    visible: boolean;
    options: LoadingOptions;
};
declare const _default: Directive<HTMLElement, LoadingBinding>;
export default _default;
