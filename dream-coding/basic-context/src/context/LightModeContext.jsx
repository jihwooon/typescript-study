import { createContext, useState } from "react";

export const LightModeContext = createContext(null);

export function LightModeProvider({ children }) {
  const [lightMode, setLightMode] = useState(false)
  const toggleMode = () => setLightMode((mode) => !mode)

  return (
    <LightModeContext.Provider value={{lightMode, toggleMode}}>
      {children}
    </LightModeContext.Provider>
  )
}
