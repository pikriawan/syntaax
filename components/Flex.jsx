"use client";

import styled from "styled-components";
import Box from "./Box";

const Flex = styled(Box)`
    display: flex;
    flex-direction: ${({ $direction }) => $direction};
    justify-content: ${({ $justify }) => $justify};
    align-items: ${({ $align }) => $align};
    gap: ${({ $gap }) => $gap};
`;

export default Flex;
