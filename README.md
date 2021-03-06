# ๐ฎ Ts + React Webgame ๐ฎ
React + TS Webgame ์ค์ต <br>
[์น ๊ฒ์์ ๋ง๋ค๋ฉฐ ๋ฐฐ์ฐ๋ React์ TypeScript ์ ์ฉํ๊ธฐ - ์ธํ๋ฐ ๊ฐ์ข](https://www.inflearn.com/course/react-typescript-webgame#)

<br>

## ๐ฑ ํ์ต ๋ชฉํ
- React + TypeScript
- DefinitelyTyped
- React Router ํ์ดํ
- Redux ํ์ดํ
- MobX ํ์ดํ

<br>

## ๐ฑ ํ์ต ๋ด์ฉ
### ํ์์คํฌ๋ฆฝํธ ํ์ต
- [TypeScript ๊ณต์ ๋ฌธ์ - Handbook](https://www.typescriptlang.org/ko/docs/handbook/intro.html)
- [TypeScript ๊ณต์ ๋ฌธ์ - What's New](https://www.typescriptlang.org/docs/handbook/release-notes/overview.html)

<hr>

1. DefinitelyTyped
    - typescript ์ง์ ์ปค๋ฎค๋ํฐ
    - react์ react-dom์ ํ์ดํ์ ์ง์ํ์ง ์๊ธฐ ๋๋ฌธ์, ๋ฐ๋ก ์ค์นํด์ฃผ์ด์ผ ํ๋ค. `@types/react @types/react-dom`

<br>

2. ํ์์คํฌ๋ฆฝํธ ์ธํ
    - tsconfig.json์ `"esModuleInterop": true,`์ค์ ํ๋ฉด, export๋ก ๋ด๋ณด๋ด์ง React์ ReactDOM์ export default๋ก ๋ด๋ณด๋ด์ง ๊ฒ์ฒ๋ผ ์ฌ์ฉํ  ์ ์๋ค.

<br>

3. `useState([])` 
    - useState์์ ๋น๋ฐฐ์ด ์ด๊ธฐ๊ฐ์ ํ์์ด never๊ฐ ๋๋ ํ์ดํ ๋ฌธ์ ๋ฅผ ์ผ์ผํจ๋ค.
    - **useState์ ์ ๋ค๋ฆญ์ผ๋ก ํ์ดํ ํ  ๊ฒ!**

<br>

4. webpack-cli@4๋ฒ์  hot reload ์ค์ 
    - webpack-cli@4๋ฒ์  ์ฌ์ฉ ์ ๋ช๋ น์ด๊ฐ `webpack-dev-server` ๋์ ์ `webpack serve --env development`๋ก ๋ฐ๋

<br>

5. setTimeout
    - TS์ฌ์ฉ ์ setTimeout์ ์์ ์ ํ๊ฒฝ์ ๊ตฌ๋ถํ์ง ๋ชปํ๊ธฐ ๋๋ฌธ์, ๋ธ๋ผ์ฐ์ ์์ ์ฌ์ฉ๋  ์ window๋ก ๋ช์ํด์ฃผ์ด์ผ ํ๋ค. 
    - `window.setTimeout`

<br>

6. โจuseRef
    - useRef๋ ์ค๋ฒ๋ก๋ฉ ๋์ด์์ด, ์ธ๊ฐ์ง ๋ฐฉ๋ฒ์ผ๋ก ํ์์ ์ ํด์ค ์ ์๋ค.
    - `MutableRefObject`๋ก ์ง์ ๋์ด์ผ useRef์ ๋ณ์๋ฅผ ํ ๋นํ์ฌ ์ฌ์ฉํ๋ ์ฝ๋ฉ์ ํ  ์ ์๋ค.

<br>

7. `!`
    - ํ์คํ ํ์์ ๋ณ์์ธ๋ฐ, ํ์์๋ฌ๊ฐ ์๊ธธ ๊ฒฝ์ฐ | undefined๋ ๋๋ ๊ฒฝ์ฐ `๋ณ์!`์ผ๋ก ํ์์ ํ์ ํด์ค๋ค.

<br>

8. as const
    - ํ์คํ ๊ฐ์๋ `as const`๋ฅผ ๋ถ์ฌ์ฃผ๋ฉด, ๊ฐ์ด ํ์์ผ๋ก ํ์ ๋๋ค.

<br>

9. `type ImgCoords = typeof rspCoords[keyof typeof rspCoords]` ์ฐฌ์ฐฌํ ๋ฏ์ด๋ณด๊ธฐ...๐
    - typeof rspCoords
  
       <img height="100" src="./images/1-1.png">

    - keyof typeof rspCoords

       <img height="30" src="./images/1-2.png">


    - typeof rspCoords[keyof typeof rspCoords]

       <img height="30" src="./images/1-3.png">
      
<br>

10. `.includes`
    - `.includes`๋ฅผ ์ฌ์ฉํ๋ ค๋ฉด tsconfig.json์ `es2016`์ ์ค์ ํด์ฃผ์ด์ผ ํ๋ค.

<br>

11. ํจ์ ์ปดํฌ๋ํธ ํ์ดํ
    - ๐ซ`SFC` - deprecated 
    - ๐ซ`StatelessComponent` - deprecated
    > React์์ hook์ด ๋ค์ด์ค๋ฉด์ ํจ์์ปดํฌ๋ํธ๋ ๋์ด์ stateless๋ก ์ฌ์ฉ๋์ง ์๊ธฐ ๋๋ฌธ์, ์ฌ์ฉํ์ง ์๋๋ค!!

<br>

12. memo
    - ์์์ปดํฌ๋ํธ์์ props๋ฅผ ๋ฐ์์ฌ ๋ ์์์ปดํฌ๋ํธ์ ๊ฐ์ธ์ค!

<br>

13. ๋ผ์ฐํฐ ํ์ดํ
    - hooks์ผ๋ก ์ฌ์ฉํ  ๊ฒฝ์ฐ, hooks์์ฒด์์ match, history, location props๊ฐ ๋ค์ด์๊ธฐ ๋๋ฌธ์, props๋ฅผ ๋๊ฒจ์ค ํ์๊ฐ ์๋ค.(๊ฐ-ํธ)
    - `useLocation, useHistory, useRouteMatch`

<br>

14. `ReturnType<typeof ํจ์๋ช>`
    - ํจ์์ ๋ฆฌํด ํ์์ ๊ฐ์ ธ์ค๋ ์ ํธ๋ฆฌํฐ