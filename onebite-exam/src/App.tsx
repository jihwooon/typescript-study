import { Button } from './components/ui/button'
import { cn } from './lib/utils'

function App() {
  const isActive = false

  return (
    <div>
      <div className="flex min-h-svh flex-col items-center justify-center">
        <Button>Click me</Button>
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
