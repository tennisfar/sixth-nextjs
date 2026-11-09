import Image from 'next/image'

export default function BrowserFrame({ shot, priority = false, className = '' }) {
  return (
    <div className={`rounded-2xl bg-white shadow-2xl shadow-black/10 ring-1 ring-black/5 overflow-hidden ${className}`}>
      <div className="flex items-center gap-1.5 px-4 py-3 border-b border-black/5 bg-[#f4f8fb]">
        <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-3 text-xs text-black/40 truncate">yourstore.dk/checkout</span>
      </div>
      <Image
        src={shot.src}
        width={shot.width}
        height={shot.height}
        alt={shot.alt}
        layout="responsive"
        priority={priority}
      />
    </div>
  )
}
