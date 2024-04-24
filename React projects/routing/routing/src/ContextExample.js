import { createContext } from "react";
import { Sample1 } from "./Sample1";
export const Namecontext=createContext();
export function ContextExample() {
   
    const name="jack";
  return (
    <Namecontext.Provider value={name}>
    <h3> Context Exaple</h3>
    <Sample1/>  
    </Namecontext.Provider>

  );
}

