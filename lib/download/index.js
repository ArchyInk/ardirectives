import { useCreateElement, useEventListener } from "arhooks-vue";
const download = () => {
    let removeEvent = () => { };
    const setDefaultCss = (el) => {
        el.style.cssText = "cursor: pointer;color:#096dd9;";
    };
    const getUrl = (el, options) => {
        if (!options) {
            const _url = el.href || el.src;
            if (!_url)
                return;
            return _url;
        }
        else if (typeof options === 'string') {
            return options;
        }
        else {
            return options.url;
        }
    };
    const setStyle = (el, options) => {
        if (!options) {
            setDefaultCss(el);
            return;
        }
        if (typeof options === 'string') {
            setDefaultCss(el);
            return;
        }
        if (options?.style && typeof options?.style === 'string') {
            el.style.cssText = options?.style;
        }
        else if (options?.style && typeof options?.style === 'object') {
            Object.assign(el.style, options?.style);
        }
        else {
            setDefaultCss(el);
        }
    };
    return {
        mounted(el, binding) {
            const url = getUrl(el, binding.value);
            if (!url) {
                console.warn('[v-download] url got undefined!');
                return;
            }
            setStyle(el, binding.value);
            removeEvent = useEventListener('click', async () => {
                el.style.cssText = "cursor: unset";
                const link = useCreateElement('a');
                if (typeof binding.value === 'object') {
                    setStyle(el, binding.value);
                    link.download = binding.value?.filename || '';
                    binding.value?.onBeforeDownload?.();
                }
                else {
                    setDefaultCss(el);
                    link.download = '';
                }
                const blob = await (await fetch(url)).blob();
                link.href = URL.createObjectURL(blob);
                link.click();
                typeof binding.value === 'object' && binding.value?.onFetched?.();
            }, { target: el });
        },
        unmounted() {
            removeEvent();
        }
    };
};
export default download();
