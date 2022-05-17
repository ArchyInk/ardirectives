/*
 * @author: Archy
 * @Date: 2022-05-17 11:06:41
 * @LastEditors: Archy
 * @LastEditTime: 2022-05-17 16:53:47
 * @FilePath: \ardirectives\src\loading\loading.tsx
 * @description:
 */
import { defineComponent } from 'vue';
import './index.css';
const SizeObjectEnum = {
    SMALL: { width: 16, height: 16 },
    DEFAULT: { width: 24, height: 24 },
    LARGE: { width: 32, height: 32 },
};
const renderSvg = (options) => {
    const attrs = { fill: '#ffffff', opacity: '.65', width: 24, height: 24 };
    if (options) {
        const { size, ...svgAttrs } = options;
        if (size) {
            switch (size) {
                case 'small':
                    Object.assign(svgAttrs, SizeObjectEnum.SMALL);
                    break;
                case 'default':
                    Object.assign(svgAttrs, SizeObjectEnum.DEFAULT);
                    break;
                case 'large':
                    Object.assign(svgAttrs, SizeObjectEnum.LARGE);
                    break;
            }
        }
        Object.assign(attrs, svgAttrs);
    }
    return <div class='ardirectives__loading'>
    <svg viewBox="0 0 1024 1024" version="1.1" transform='translate(-50%,-50%)' xmlns="http://www.w3.org/2000/svg" {...attrs}>
      <path d="M128 512c0-211.2 172.8-384 384-384s384 172.8 384 384c0 38.4-25.6 64-64 64s-64-25.6-64-64c0-140.8-115.2-256-256-256S256 371.2 256 512s115.2 256 256 256c38.4 0 64 25.6 64 64s-25.6 64-64 64C300.8 896 128 723.2 128 512z" p-id="2815"></path>
    </svg>
  </div>;
};
export const loadingProps = () => ({
    attrs: Object,
    visible: Boolean
});
export default defineComponent({
    name: 'Loading',
    props: loadingProps(),
    setup(props) {
        const renderSpin = () => {
            return renderSvg({ ...props.attrs });
        };
        return () => {
            return <>{props.visible ? renderSpin() : <div></div>}</>;
        };
    }
});
