import { createHotContext as __vite__createHotContext } from "/dist/mv3client.mjs";import.meta.hot = __vite__createHotContext("/styles/main.scss");import { updateStyle as __vite__updateStyle, removeStyle as __vite__removeStyle } from "/dist/mv3client.mjs"
const __vite__id = "E:/Coding Projects/Github Projects/BewlyBewly/src/styles/main.scss"
const __vite__css = ":root {\n  --bew-radius: 12px;\n  --bew-filter-glass: blur(20px) saturate(180%);\n  --bew-shadow-1: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);\n  --bew-shadow-2: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);\n  --bew-shadow-3: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);\n  --bew-shadow-4: 0 25px 50px -12px rgb(0 0 0 / 0.25);\n  --bew-theme-color: rgb(0, 161, 214);\n  --bew-logo-color: var(--bew-theme-color);\n  --bew-text-1: hsl(217, 33%, 17%);\n  --bew-text-2: hsl(215, 19%, 35%);\n  --bew-text-3: hsl(215, 19%, 55%);\n  --bew-bg: rgb(243 244 246);\n  --bew-content-1: hsl(0 0% 100% / 60%);\n  --bew-content-solid-1: hsl(0 0% 100%);\n  --bew-fill-1: rgb(120 120 128 / 12%);\n  --bew-fill-2: rgb(120 120 128 / 22%);\n  --bew-fill-3: rgb(120 120 128 / 32%);\n  --bew-fill-4: rgb(120 120 128 / 42%);\n}\n:root.dark {\n  --bew-logo-color: var(--bew-text-1);\n  --bew-text-1: hsl(215, 19%, 98%);\n  --bew-text-2: hsl(215, 19%, 70%);\n  --bew-text-3: hsl(215, 19%, 50%);\n  --bew-bg: hsl(230 12% 6%);\n  --bew-content-1: hsl(230 12% 13% / 60%);\n  --bew-content-solid-1: hsl(230 12% 13%);\n  --bew-fill-1: rgb(120 120 128 / 16%);\n  --bew-fill-2: rgb(120 120 128 / 26%);\n  --bew-fill-3: rgb(120 120 128 / 36%);\n  --bew-fill-4: rgb(120 120 128 / 46%);\n}\n@supports not (backdrop-filter: blur(15px)) {\n  :root, :root.dark {\n    --bew-content-1: var(--bew-content-solid-1);\n  }\n}\nhtml, body, #app {\n  margin: 0;\n  padding: 0;\n}\nbody {\n  background: var(--bew-bg);\n  color: var(--bew-text-1);\n}\n.btn {\n  background-color: var(--bew-theme-color);\n  border-color: var(--bew-theme-color);\n  border-radius: var(--bew-radius);\n  border-style: solid;\n  border-width: 2px;\n  cursor: pointer;\n  display: inline-block;\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n  padding-left: 1rem;\n  padding-right: 1rem;\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n  --tw-text-opacity: 1;\n  color: rgba(255, 255, 255, var(--tw-text-opacity));\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-translate-z: 0;\n  --tw-rotate: 0;\n  --tw-rotate-x: 0;\n  --tw-rotate-y: 0;\n  --tw-rotate-z: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-scale-z: 1;\n  -webkit-transform: translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) translateZ(var(--tw-translate-z)) rotate(var(--tw-rotate)) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotateZ(var(--tw-rotate-z)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) scaleZ(var(--tw-scale-z));\n  -ms-transform: translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) translateZ(var(--tw-translate-z)) rotate(var(--tw-rotate)) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotateZ(var(--tw-rotate-z)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) scaleZ(var(--tw-scale-z));\n  transform: translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) translateZ(var(--tw-translate-z)) rotate(var(--tw-rotate)) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotateZ(var(--tw-rotate-z)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) scaleZ(var(--tw-scale-z));\n  -webkit-transition-duration: 300ms;\n  -o-transition-duration: 300ms;\n  transition-duration: 300ms;\n  --tw-blur: var(--tw-empty,/*!*/ /*!*/);\n  --tw-brightness: var(--tw-empty,/*!*/ /*!*/);\n  --tw-contrast: var(--tw-empty,/*!*/ /*!*/);\n  --tw-grayscale: var(--tw-empty,/*!*/ /*!*/);\n  --tw-hue-rotate: var(--tw-empty,/*!*/ /*!*/);\n  --tw-invert: var(--tw-empty,/*!*/ /*!*/);\n  --tw-saturate: var(--tw-empty,/*!*/ /*!*/);\n  --tw-sepia: var(--tw-empty,/*!*/ /*!*/);\n  --tw-drop-shadow: var(--tw-empty,/*!*/ /*!*/);\n  -webkit-filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n}\n.btn:active {\n  background-color: var(--bew-theme-color);\n  --tw-scale-x: .95;\n  --tw-scale-y: .95;\n  --tw-scale-z: .95;\n  --tw-brightness: brightness(1.1);\n}\n.btn:focus {\n  background-color: var(--bew-theme-color);\n}\n.btn:disabled {\n  background-color: var(--bew-fill-4);\n  border-color: var(--bew-fill-4);\n  cursor: default;\n  opacity: 0.5;\n}\n.line-btn {\n  background-color: transparent;\n  border-color: var(--bew-fill-4);\n  border-radius: var(--bew-radius);\n  border-style: solid;\n  border-width: 2px;\n  cursor: pointer;\n  display: inline-block;\n  padding-left: 1rem;\n  padding-right: 1rem;\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n  color: var(--bew-fill-4);\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-translate-z: 0;\n  --tw-rotate: 0;\n  --tw-rotate-x: 0;\n  --tw-rotate-y: 0;\n  --tw-rotate-z: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-scale-z: 1;\n  -webkit-transform: translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) translateZ(var(--tw-translate-z)) rotate(var(--tw-rotate)) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotateZ(var(--tw-rotate-z)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) scaleZ(var(--tw-scale-z));\n  -ms-transform: translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) translateZ(var(--tw-translate-z)) rotate(var(--tw-rotate)) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotateZ(var(--tw-rotate-z)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) scaleZ(var(--tw-scale-z));\n  transform: translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) translateZ(var(--tw-translate-z)) rotate(var(--tw-rotate)) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotateZ(var(--tw-rotate-z)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) scaleZ(var(--tw-scale-z));\n  -webkit-transition-duration: 300ms;\n  -o-transition-duration: 300ms;\n  transition-duration: 300ms;\n  --tw-blur: var(--tw-empty,/*!*/ /*!*/);\n  --tw-brightness: var(--tw-empty,/*!*/ /*!*/);\n  --tw-contrast: var(--tw-empty,/*!*/ /*!*/);\n  --tw-grayscale: var(--tw-empty,/*!*/ /*!*/);\n  --tw-hue-rotate: var(--tw-empty,/*!*/ /*!*/);\n  --tw-invert: var(--tw-empty,/*!*/ /*!*/);\n  --tw-saturate: var(--tw-empty,/*!*/ /*!*/);\n  --tw-sepia: var(--tw-empty,/*!*/ /*!*/);\n  --tw-drop-shadow: var(--tw-empty,/*!*/ /*!*/);\n  -webkit-filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n}\n.line-btn:disabled {\n  background-color: var(--bew-fill-4);\n  cursor: default;\n  opacity: 0.5;\n}\n.line-btn:active {\n  --tw-scale-x: .95;\n  --tw-scale-y: .95;\n  --tw-scale-z: .95;\n  --tw-brightness: brightness(1.1);\n}\n.icon-btn {\n  cursor: pointer;\n  display: inline-block;\n  opacity: 0.75;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  -webkit-transition-property: background-color, border-color, color, fill, stroke, opacity, -webkit-box-shadow, -webkit-transform, filter, backdrop-filter;\n  -o-transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;\n  transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, -webkit-box-shadow, transform, -webkit-transform, filter, backdrop-filter;\n  -webkit-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  -o-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  -webkit-transition-duration: 150ms;\n  -o-transition-duration: 150ms;\n  transition-duration: 150ms;\n  -webkit-transition-duration: 200ms;\n  -o-transition-duration: 200ms;\n  transition-duration: 200ms;\n  font-size: 1rem;\n}\n.icon-btn:hover {\n  opacity: 1;\n  color: var(--bew-theme-color);\n}\n.chk-btn {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  -webkit-align-items: center;\n  align-items: center;\n  padding-left: 1rem;\n  padding-right: 1rem;\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n.chk-btn input {\n  margin-left: 1rem;\n}\nselect {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  background-color: var(--bew-fill-1);\n  border-radius: var(--bew-radius);\n  border-style: none;\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n  padding-left: 1rem;\n  padding-right: 1rem;\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n  text-align: center;\n  color: var(--bew-text-1);\n}"
__vite__updateStyle(__vite__id, __vite__css)
import.meta.hot.accept()
export default __vite__css
import.meta.hot.prune(() => __vite__removeStyle(__vite__id))