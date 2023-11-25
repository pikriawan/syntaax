const metadata = {
  title: 'Syntaax',
  description: ''
}

function RootLayout ({ children }) {
  return (
    <html>
      <body>
        {children}
      </body>
    </html>
  )
}

export { metadata }
export default RootLayout