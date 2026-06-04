import Loader from '@/components/Loader'

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger' // union type
  loading?: boolean
  children: React.ReactNode
}

export default function Button({
  variant = 'primary',
  loading = false,
  children,
  ...restProps
}: Props) {
  const styles = {
    primary: 'bg-blue-400 text-white duration-200 hover:bg-blue-500',
    secondary: 'bg-gray-400 text-black duration-200 hover:bg-gray-500',
    danger: 'bg-red-400 text-white duration-200 hover:bg-red-500'
  }

  return (
    <button
      {...restProps}
      className={`relative h-[36px] min-w-[60px] cursor-pointer rounded-md px-[10px] ${styles[variant]}`}>
      {loading ? (
        <Loader
          size={16}
          color="white"></Loader>
      ) : (
        children
      )}
    </button>
  )
}
