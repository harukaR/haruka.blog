import { useState } from "react";
import { atom, useRecoilState, useSetRecoilState } from "recoil"
//theme用
export type Theme = "light" | "dark";
//icon用
// export type BooleanLiteral = true | false;


// テーマ用
const themeState = atom<Theme> ({
    key:"themeState",
    default:'light',
});

// アイコン用
const iconState = atom({
    key:"iconState",
    default:true,
})

// 状態管理しているもの更新(のみ)できるようにしてかつ他のコンポーネントに渡せるようにする
export const useSetTheme = ()=> useSetRecoilState(themeState);
export const useSetIcon = ()=> useRecoilState(iconState)

export const useTheme = ()=>{
    //取得と更新ができるように定義
    const [theme,setTheme] = useRecoilState(themeState);
    const [mode,setMode] = useRecoilState(iconState);
    const toggleTheme = ()=>{
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        setMode(!mode)
        window.localStorage.setItem("theme",newTheme);  
        const root = window.document.documentElement;
        root.setAttribute("data-theme", newTheme);
        
    }
    return{theme,toggleTheme,mode,setMode}

}