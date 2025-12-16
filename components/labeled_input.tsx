import { Input, InputProps } from "@/components/input"
import { Label } from "@/components/label"

function LabeledInput(
  {label, id, ...props} : {label: string} & InputProps) {
  return (
    <div className="grid w-full max-w-sm items-center gap-3">
      <Label htmlFor={id}>{label}</Label>
      <Input id={id} {...props}/>
    </div>
  )
}

export {LabeledInput}
