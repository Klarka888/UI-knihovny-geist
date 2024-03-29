import react, { useState } from "react";

export const CollapseBox = ({title, children}) => {
    const [open, setOpen] = useState(false)
    const handleClick = () => {
        return(
            setOpen(!open)
        )
    }
    return(
        <>
        <h1>{title} <span onClick={handleClick}>{open? '♥' : '♣'}</span></h1>
        {children}
        </>
    )
}