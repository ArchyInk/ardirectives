import type { ExtractPropTypes, PropType, SVGAttributes } from 'vue';
import './index.css';
export declare type LoadingSizeEnum = 'small' | 'default' | 'large';
export declare type LoadingOptions = {
    size?: LoadingSizeEnum;
} & SVGAttributes;
export declare const loadingProps: () => {
    attrs: PropType<LoadingOptions>;
    visible: BooleanConstructor;
};
export declare type LoadingPropsType = Partial<ExtractPropTypes<ReturnType<typeof loadingProps>>>;
declare const _default: import("vue").DefineComponent<{
    attrs: PropType<LoadingOptions>;
    visible: BooleanConstructor;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractPropTypes<{
    attrs: PropType<LoadingOptions>;
    visible: BooleanConstructor;
}>>, {
    visible: boolean;
}>;
export default _default;
