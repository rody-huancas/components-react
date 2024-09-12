import { useState } from 'react'
import { Badge } from './components/Badge'
import { Button } from './components/Button'
import { Checkbox } from './components/Checkbox'
import { ContextualHelp } from './components/ContextualHelp'
import { ConfirmModal } from './components/modal/ConfirmModal'
import { Notice } from './components/Notice'
import { SelectInput } from './components/SelectInput'
import { Textarea } from './components/Textarea'

const App = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <div className="relative flex flex-col items-center justify-center gap-5 h-screen">
      <div className="flex gap-5">
        <Button size="large" variant="danger">
          Click Me
        </Button>

        <Badge label="Active" type="success" />

        <Checkbox label="Check Me" />

        <Notice label="Notice">Message success</Notice>
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

      <div>
        <button onClick={() => setIsOpen(true)}>Open Modal</button>
      </div>

      <ConfirmModal
        title="Modal"
        message="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius cumque rerum nulla reiciendis possimus facere explicabo doloremque expedita, id, animi consectetur, consequuntur voluptatibus delectus itaque! Repellat odit unde quae facilis."
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onConfirm={() => {}}
      />
    </div>
  )
}

export default App
