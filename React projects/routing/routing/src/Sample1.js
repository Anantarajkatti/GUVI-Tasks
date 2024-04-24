import { useContext } from "react";
import { Namecontext } from "./ContextExample";

export function Sample1() {
    const name = useContext(Namecontext);
    return (
        <h2>{name}</h2>
    );
}
