import { useState } from "react";
import { atom, useRecoilState, useSetRecoilState } from "recoil"
//テーマの状態で使う型を定義
export type Theme = "light" | "dark";

//状態管理
const themeState = atom<Theme> ({
    key:"themeState",
    default:'light',
});

// 状態管理しているもの更新(のみ)できるようにしてかつ他のコンポーネントに渡せるようにする
export const useSetTheme = ()=> useSetRecoilState(themeState);

export const useTheme = ()=>{
    //取得と更新ができるように定義
    const [theme,setTheme] = useRecoilState(themeState);
    const [mode,setMode] = useState(true);
    const toggleTheme = ()=>{
        setMode(!mode)
        console.log(mode)
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        window.localStorage.setItem("theme",newTheme);
        const root = window.document.documentElement;
        root.setAttribute("data-theme", newTheme);
    }
    return{theme,toggleTheme,mode}

}