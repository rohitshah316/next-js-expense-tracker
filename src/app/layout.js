import { ExpenseProvider } from '@/context/ExpenseContext';
import './globals.css'

export const metadata={
  title:"Expense Tracker",
  description:"Personal Expense Tracker built with Next.js",
};


export default function RootLayout({children}){
  return(
    <html lang='en'>
      <body>
        <ExpenseProvider>
          {children}
        </ExpenseProvider>
      </body>
    </html>
  )
}