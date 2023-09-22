import { useRef } from 'react'
import { generateImage } from '@/actions/generate-image-action'
import PrompButton from './prompt-button'

interface Props {
  setUrlImage: (url: string) => void
}

const PromptForm = ({ setUrlImage }: Props) => {
  const promptRef = useRef<HTMLFormElement>(null)
  return (
    <form
      action={async (formData: FormData) => {
        const url: string = await generateImage(formData)
        setUrlImage(url)
        promptRef.current?.reset()
      }}
      ref={promptRef}
      className="flex flex-row gap-x-4 justify-between"
    >
      <input
        type="text"
        name="prompt"
        id="prompt"
        placeholder="Write your prompt"
        className="bg-zinc-950 text-white px-3 py-2 focus:outline-none flex-grow"
      />
      <PrompButton />
    </form>
  )
}

export default PromptForm
