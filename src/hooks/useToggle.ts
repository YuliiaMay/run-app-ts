import { useState } from "react";

export const useToggle = (initialState: boolean = false): any => {
    const [isOpen, setIsOpen] = useState<boolean>(initialState);
    const open = () => setIsOpen(true);
    const close = () => setIsOpen(false);
    const toggle = () => setIsOpen((isOpen: boolean) => !isOpen);

    return { isOpen, open, close, toggle };
}

export default useToggle;