import PromptComponent from '@/components/prompt-component'

export default function Home () {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen h-full">
      <div className="bg-zinc-900 p-4 space-y-4">
        <PromptComponent />
      </div>
    </main>
  )
}
