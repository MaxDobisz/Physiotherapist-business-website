import { useEffect, useRef } from "react";

export const useClickOutside = (setIsActiveHandler, buttonClass) => {
    let nodeRef = useRef();

    useEffect(() => {
        const handler = (e) => {
            if (!nodeRef.current.contains(e.target) && !e.target.classList.contains(buttonClass)) {
                setIsActiveHandler(false)
            }
        }

        document.addEventListener('mousedown', handler);

        return () => {
            document.removeEventListener('mousedown', handler)
        }
    });

    return nodeRef;
}