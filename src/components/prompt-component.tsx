'use client'

import { useState } from 'react'
import Image from 'next/image'
import PromptForm from '@/components/prompt-form'

// type Props = {}

const PromptComponent = () => {
  const [urlImage, setUrlImage] = useState<string>('')
  return (
    <>
      <PromptForm setUrlImage={setUrlImage} />
      {urlImage !== '' && (
        <Image
          src={urlImage}
          width={500}
          height={500}
          alt="Image generated using OpenAI Dall-e"
        />
      )}
    </>
  )
}

export default PromptComponent
