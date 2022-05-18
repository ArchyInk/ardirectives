/*
 * @author: Archy
 * @Date: 2022-05-17 11:10:00
 * @LastEditors: Archy
 * @LastEditTime: 2022-05-18 10:42:07
 * @FilePath: \ardirectives\src\loading\index.tsx
 * @description: 
 */
import Loading, { LoadingOptions } from "./Loading";
import { render } from "vue";
import type { DirectiveBinding, Directive } from 'vue'

export type LoadingBinding = boolean | { 
  visible: boolean,
  options: LoadingOptions
}

const renderLoading = (el: HTMLElement, binding: DirectiveBinding<LoadingBinding>) => {
  if (typeof binding?.value === 'boolean') {
    render(<Loading visible={binding.value}></Loading>, el)
  } else {
    render(<Loading visible={binding.value.visible} options={binding.value.options}></Loading>, el)
  }
}

export default {
  mounted(el, binding) {
    if (!['relative', 'absolute'].includes(el.style.position)) {
      el.style.position = 'relative'
    }
    renderLoading(el, binding)
  },
  updated(el, binding) {
    renderLoading(el, binding)
  }
} as Directive<HTMLElement, LoadingBinding>