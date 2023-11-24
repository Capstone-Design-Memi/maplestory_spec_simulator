import { createContext, useState } from 'react';
import { Cookies, useCookies } from "react-cookie";

export const LocalStorageContext = createContext({
    information: {},
    setInformationHandler: (information) => {},
});

const LocalStorageContextProvider = ({ children }) => {
    const [cookies, setCookie, removeCookie] = useCookies();
    const [information, setInformation] = useState(JSON.parse(localStorage.getItem(`testChItem${cookies.cId.cId}`))[0]);

    const setInformationHandler = (information) => {
        localStorage.setItem(`testChItem${cookies.cId.cId}`, JSON.stringify([information]));
        setInformation(information)
    };

    return (
        <LocalStorageContext.Provider value={{information, setInformationHandler}}>
            {children}
        </LocalStorageContext.Provider>
    )
}

export default LocalStorageContextProvider;