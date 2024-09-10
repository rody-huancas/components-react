import { Badge } from './components/Badge'
import { Button } from './components/Button'
import { Checkbox } from './components/Checkbox'
import { Textarea } from './components/Textarea'

const App = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-5 h-screen'>
      <div className="flex gap-5">
        <Button size="large" variant="danger">
          Click Me
        </Button>

        <Badge label="Active" type="success" />

        <Checkbox label="Check Me" />
      </div>
      
      <div className='flex gap-5'>
        <Textarea label="Message" />
      </div>
    </div>
  )
}

export default App
