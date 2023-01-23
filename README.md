# Test module federation with different version of vue

Examples: https://github.com/module-federation/module-federation-examples

### Results:
- ✅ Vue 3 with vite + Vue 3 and webpack 5 (as host app) - OK
- ✅ Vue 2.7 with vite + Vue 2.7 and webpack 5 (as host app) - OK
- 🥴 Vue 3 with vite + Vue 2.7 and webpack 5 (as host app) - Issues

So, as tests show, better to use same version between all apps. 
API of vue is changed dramatically (2 -> 3 version) and because of it we have issues + Vue itself set globally.

One more example not to use different versions of Vue: https://blog.logrocket.com/use-vue-js-general-purpose-javascript-library/
1. Automatic router inclusion within browsers
2. Vue added globally to window
3. While Vue.js is a wonderful framework, and I enjoy using it very much, the issues above show its origin as a reactive JavaScript framework, which is supposed to totally take over the page.

Example from Vue lib code: https://github.com/vuejs/vue-router/blob/v3.1.5/src/index.js#L260

### So, I think perfect plan would be: 
1) Update old apps to Vue 2.7 version, add Composition API, also we can add TypeScript and use it in new code or while refactoring
2) Create new app with Vue 2.7 + Vite + TS. 
Use it as:
- SPA
- Plugin / Library (npm module)
- Module federation

### Update to 3 version
1) Update old app from 2.7 to 3
2) In same time it is possible to use vue 3 in vue 2 (example: https://github.com/module-federation/module-federation-examples/tree/master/vue2-in-vue3)

