import React from "react";

type Props = {
    children: React.ReactNode;
};

const Title = ({ children }: Props) => {
    return (
        <h1 className="basis-3/5 font-orbitron uppercase text-3xl font-bold text-secondary-500">
            {children}
        </h1>
    );
};

export default Title;