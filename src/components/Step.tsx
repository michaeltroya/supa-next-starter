export default function Step({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <li className="mx-4">
      <input type="checkbox" id={title} className="peer mr-2" />
      <label
        htmlFor={title}
        className="text-lg font-semibold text-foreground/90 hover:cursor-pointer peer-checked:line-through"
      >
        {title}
      </label>
      <div className="mx-6 text-sm text-foreground/80 peer-checked:line-through">
        {children}
      </div>
    </li>
  )
}
