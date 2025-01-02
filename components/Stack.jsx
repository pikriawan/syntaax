"use client";

import clsx from "clsx";
import styles from "@/styles/Stack.module.css";

export default function Stack({
    children,
    className,
    direction,
    justifyContent,
    alignItems,
    spacing = 0,
    ...props
}) {
    return (
        <>
            <div
                className={clsx(
                    styles.stack,
                    `${direction}`,
                    `justify-${justifyContent}`,
                    `items-${alignItems}`,
                    `spacing-${spacing}`,
                    className
                )}
                {...props}
            >
                {children}
            </div>
            <style jsx>{`
                .${direction} {
                    flex-direction: ${direction};
                }

                .justify-${justifyContent} {
                    justify-content: ${justifyContent};
                }

                .items-${alignItems} {
                    align-items: ${alignItems};
                }

                .spacing-${spacing} {
                    gap: ${spacing}rem;
                }
            `}</style>
        </>
    );
}
