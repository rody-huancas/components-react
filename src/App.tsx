import { Badge } from './components/Badge'
import { Button } from './components/Button'
import { Checkbox } from './components/Checkbox'
import { ContextualHelp } from './components/ContextualHelp'
import { SelectInput } from './components/SelectInput'
import { Textarea } from './components/Textarea'

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-5 h-screen">
      <div className="flex gap-5">
        <Button size="large" variant="danger">
          Click Me
        </Button>

        <Badge label="Active" type="success" />

        <Checkbox label="Check Me" />
      </div>

      <div className="flex gap-5">
        <Textarea label="Message" />
        <SelectInput
          options={[
            { key: '1', value: 'Option 1' },
            { key: '2', value: 'Option 2' },
          ]}
        />
        <ContextualHelp>
          <h3 className="font-medium text-gray-900 mb-2">Need Help?</h3>
          <p className="text-sm text-gray-500">
            If you're having trouble accessing your account, contact our
            customer support team for help.
          </p>
        </ContextualHelp>
      </div>
    </div>
  )
}

export default App
