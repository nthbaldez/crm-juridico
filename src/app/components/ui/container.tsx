export default function Container({
  children,
  styles,
}: {
  children: React.ReactNode
  styles?: string
}) {
  return (
    <div
      className={`min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 mt-[2px] w-full`}
    >
      <div className="flex justify-between max-w-7xl mx-auto items-center px-4">
        <div className={`mt-8 w-full ${styles}`}>{children}</div>
      </div>
    </div>
  )
}
