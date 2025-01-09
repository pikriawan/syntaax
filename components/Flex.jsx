"use client";

import styled from "styled-components";

function Flex({ children, ...props }) {
    if (!props.as) {
        props.as = "div";
    }

    return (
        <props.as {...props}>
            {children}
        </props.as>
    );
}

export default styled(Flex)`
    display: flex;
    width: ${({ width }) => width};
    height: ${({ height }) => height};
    flex-direction: ${({ direction }) => direction};
    justify-content: ${({ justify }) => justify};
    align-items: ${({ align }) => align};
    gap: ${({ gap }) => gap};
`;
