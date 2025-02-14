import { LucideProps } from "lucide-react"
import { ForwardRefExoticComponent, RefAttributes } from "react"

interface ButtonProps {
  title: string
  viewDetails: string
  icon?: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >
}

export function Button({ title, viewDetails, icon: Icon }: ButtonProps) {
  return (
    <div
      title={viewDetails}
      className="cursor-pointer rounded-[0px_16px_16px_0px] border bg-primary px-14 py-3 text-xs font-semibold text-white transition-colors hover:border-white hover:bg-dark-bg hover:text-white"
    >
      <span className="flex items-center gap-3">
        <span className="font-bold">{title}</span>
        {Icon && <Icon size={16} />}
      </span>
    </div>
  )
}
