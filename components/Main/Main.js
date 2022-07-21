import Link from 'next/link'
import styles from './Main.module.css'

export default function Main({ children }) {
  return (
    <main className="p-5 flex-1">
      <div className="rounded-3xl bg-baby-blue p-5 h-full">{children}</div>
    </main>
  )
}
