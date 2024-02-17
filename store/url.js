import React, { createContext, useState } from "react";

export const UrlContext = createContext({
    url:"",
    setURL:()=>{}
});

function UrlContextProvider({children}) {
 const [url, setURL] = useState("");

 

 return <UrlContext.Provider value={{url,setURL}} >{children}</UrlContext.Provider>
}

export default UrlContextProvider



