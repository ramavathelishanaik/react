import { useContext,createContext,useEffect,useState } from 'react';

const AppContext = createContext()

const getinitialdarkmode=()=>{
    const prefersdarkmode = window.matchMedia('prefers-color-scheme:dark').matches;
    const storedarkMode = localStorage.getItem('darkTheme') === 'true'
    return storedarkMode || prefersdarkmode
}
console.log(getinitialdarkmode())

export const AppProvider=({children})=>{
    const [isdarkTheme,setIsdarkTheme] = useState(getinitialdarkmode());
    const [seachquery,setSearchquery] = useState('india')

    const toggleTheme=()=>{
        const newTheme = !isdarkTheme;
        setIsdarkTheme(newTheme);
        localStorage.setItem('darkTheme',newTheme)
        // const body = document.querySelector('body');
        // body.classList.toggle('dark-theme',newTheme);
    }

    useEffect(()=>{
        document.body.classList.toggle('dark-theme',isdarkTheme);
    },[isdarkTheme])

    return <AppContext.Provider value={{isdarkTheme,toggleTheme,seachquery,setSearchquery}}>
        {children}
    </AppContext.Provider>
        

    
}

export const useGlobalContext=()=> useContext(AppContext)