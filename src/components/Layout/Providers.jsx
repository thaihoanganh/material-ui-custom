import { useState, createContext, useMemo } from "react";

export const LayoutContext = createContext();

const LayoutProvider = (props) => {
    const { children } = props;

    const [state, setState] = useState({
        isActiveSidebar: false,
    });

    const onToggleSidebar = () => {
        setState((prevState) => {
            return { ...prevState, isActiveSidebar: !prevState.isActiveSidebar };
        });
    };

    const exportValue = useMemo(() => {
        return {
            isActiveSidebar: state.isActiveSidebar,
            onToggleSidebar,
        };
    }, [state]);

    return <LayoutContext.Provider value={exportValue}>{children}</LayoutContext.Provider>;
};

export default LayoutProvider;
