"use client";

import styled from "styled-components";

function Flex({ children, ...props }) {
    return (
        <div {...props}>
            {children}
        </div>
    );
}

export default styled(Flex)`
    width: ${({ width }) => width};
    height: ${({ height }) => height};
    display: flex;
    flex-direction: ${({ direction }) => direction};
    justify-content: ${({ justify }) => justify};
    align-items: ${({ align }) => align};
    gap: ${({ gap }) => gap};
`;
