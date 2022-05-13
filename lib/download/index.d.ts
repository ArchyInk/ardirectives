import { CSSProperties, Directive } from "vue";
export declare type DownloadOptions = {
    url: string;
    filename?: string;
    style?: CSSProperties | string;
    onBeforeDownload?: () => void;
    onFetched?: () => void;
};
declare const _default: Directive<HTMLElement, string | DownloadOptions>;
export default _default;
