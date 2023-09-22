import { experimental_useFormStatus as useFormStatus } from 'react-dom'

// interface Props {}

const PrompButton = () => {
  const { pending } = useFormStatus()
  return (
    <button
      type="submit"
      className="bg-sky-950 text-white px-3 py-2 disabled:opacity-50"
      disabled={pending}
    >
      Generate Image
    </button>
  )
}

export default PrompButton
