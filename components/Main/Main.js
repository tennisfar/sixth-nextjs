import Link from 'next/link'
import styles from './Main.module.css'

export default function Main({ children }) {
  return (
    <main className="pt-[5vh] px-[3vh] pb-5">
      <div className="rounded-3xl bg-baby-blue p-5 pb-12 max-w-md mx-auto">{children}</div>
    </main>
  )
}
