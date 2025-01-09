"use client";

import styled from "styled-components";

function Box({ children, as: Component = "div", ...props }) {
    return <Component {...props}>{children}</Component>;
}

export default styled(Box)`
    width: ${({ $width }) => $width};
    height: ${({ $height }) => $height};
    margin: ${({ $m }) => $m};
    margin: ${({ $mx }) => `0 ${$mx}`};
    margin: ${({ $my }) => `${$my} 0`};
    margin-top: ${({ $mt }) => $mt};
    margin-right: ${({ $mr }) => $mr};
    margin-bottom: ${({ $mb }) => $mb};
    margin-left: ${({ $ml }) => $ml};
    padding: ${({ $p }) => $p};
    padding: ${({ $px }) => `0 ${$px}`};
    padding: ${({ $py }) => `${$py} 0`};
    padding-top: ${({ $pt }) => $pt};
    padding-right: ${({ $pr }) => $pr};
    padding-bottom: ${({ $pb }) => $pb};
    padding-left: ${({ $pl }) => $pl};
`;
