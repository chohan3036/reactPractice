interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
}

export default function TextField({ label, ...restProps }: Props) {
  return (
    <label className="flex flex-col gap-[2px]">
      {label?.trim() && <span className="text-[13px]">{label}</span>}
      <input
        {...restProps}
        className="box-border h-[36px] rounded-md border border-blue-500 px-[8px]"
      />
    </label>
  )
}
