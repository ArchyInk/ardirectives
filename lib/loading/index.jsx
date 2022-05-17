/*
 * @author: Archy
 * @Date: 2022-05-17 11:10:00
 * @LastEditors: Archy
 * @LastEditTime: 2022-05-17 16:11:15
 * @FilePath: \ardirectives\src\loading\index.tsx
 * @description:
 */
import Loading from "./Loading";
import { render } from "vue";
const renderLoading = (el, binding) => {
    if (typeof binding?.value === 'boolean') {
        render(<Loading visible={binding.value}></Loading>, el);
    }
    else {
        render(<Loading visible={binding.value.visible} attrs={binding.value.options}></Loading>, el);
    }
};
export default {
    mounted(el, binding) {
        if (!['relative', 'absolute'].includes(el.style.position)) {
            el.style.position = 'relative';
        }
        renderLoading(el, binding);
    },
    updated(el, binding) {
        renderLoading(el, binding);
    }
};
