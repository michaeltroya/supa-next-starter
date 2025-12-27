import { Checkbox } from '../ui/checkbox'

export function TutorialStep({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <li className="relative">
      <Checkbox
        id={title}
        name={title}
        className={`peer absolute top-[3px] mr-2`}
      />
      <label
        htmlFor={title}
        className={`text-foreground relative text-base font-medium peer-checked:line-through`}
      >
        <span className="ml-8">{title}</span>
        <div
          className={`text-muted-foreground ml-8 text-sm font-normal peer-checked:line-through`}
        >
          {children}
        </div>
      </label>
    </li>
  )
}
