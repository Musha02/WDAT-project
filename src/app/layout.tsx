import { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    default: "Next js Demo",
    template: "%s | NextJs"

  },
  
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <header
          style ={{
            backgroundColor: "lightblue",
            padding: "Irem",      
          }}
        >
          <p>Header</p>
        </header>
        {children}
        <footer
          style ={{
            backgroundColor: "ghostwhite",
            padding: "Irem",      
          }}
        >
          <p>Footer</p>
        </footer>




      </body>
    </html>
  )
}
