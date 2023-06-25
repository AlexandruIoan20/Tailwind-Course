import '@styles/main.css'; 

export const metadata = { 
    title: "Fireship Tailwind Course", 
    description: "Just Some Descriprion"
}

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
        <body>
            { children }
        </body>
    </html>
  )
}

export default RootLayout; 