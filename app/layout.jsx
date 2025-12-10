import './globals.css'

export const metadata = {
  title: 'Red Snapper Realty',
  description: 'Coastal living, expertly managed'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
