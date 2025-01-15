export function GET() {
    return new Response(
`<!DOCTYPE html>
<html>
    <body>
        <h1>Hello, World!</h1>
    </body>
<html>`,
        {
            headers: {
                "Content-Type": "text/html"
            }
        }
    );
}
