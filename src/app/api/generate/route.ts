import { NextResponse } from 'next/server'
import { Configuration, OpenAIApi } from 'openai-edge'

export const dynamic = 'force-dynamic'
export const runtime = 'edge'

const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY
})

const openai = new OpenAIApi(config)

export const POST = async (request: Request) => {
  try {
    const { prompt } = await request.json()
    // const formData = await request.formData()

    if (prompt === '') {
      return new NextResponse('Prompt is required', {
        status: 400
      })
    }

    const response = await openai.createImage({
      prompt,
      n: 1,
      size: '512x512'
    })

    return NextResponse.json({ url: 'https://freepngimg.com/save/104082-picture-whatsapp-shocked-emoji-download-hd/512x512' }, {
      status: 200
    })
  } catch (error) {
    return NextResponse.error()
  }
}
