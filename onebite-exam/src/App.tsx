import { Toast } from 'radix-ui'
import { Button } from './components/ui/button'
import { Input } from './components/ui/input'
import { Textarea } from './components/ui/textarea'
import { cn } from './lib/utils'
import { toast, Toaster } from 'sonner'

function App() {
  const isActive = false

  return (
    <div className="p-5">
      <Input placeholder="입력 ..." />
      <Textarea />
      <Toaster />

      <div className="flex min-h-svh flex-col items-center justify-center">
        <Button
          onClick={() => {
            toast('토스트 메세지', { position: 'top-center' })
          }}
        >
          Click me
        </Button>
        <Button variant={'destructive'}>Button</Button>
        <Button variant={'ghost'}>Button</Button>
        <Button variant={'link'}>Button</Button>
        <Button variant={'secondary'}>Button</Button>

        <div
          className={cn(
            'w-10 text-sm',
            isActive ? 'text-gray-500' : 'text-red-500',
          )}
        >
          isActive
        </div>
      </div>
    </div>
  )
}

export default App
