export default function SpinnerIcon({ width = 16, height = 16, ...props }) {
    return (
        <svg width={width} height={height} fill="transparent" stroke="currentColor" stroke-width="1.5" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M 15 8 A 7 7 0 0 1 8 15 A 7 7 0 0 1 1 8 A 7 7 0 0 1 8 1" />
        </svg>
    );
}
