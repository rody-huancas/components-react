import { useState } from 'react'

import { Badge } from './components/Badge'
import { Button } from './components/Button'
import { Notice } from './components/Notice'
import { Textarea } from './components/Textarea'
import { Checkbox } from './components/Checkbox'
import { SelectInput } from './components/SelectInput'
import { ConfirmModal } from './components/modal/ConfirmModal'
import { ContextualHelp } from './components/ContextualHelp'
import { Table, TableBody, TableHeader } from './components/Table'
import { RadioGroup } from './components/RadioGroup'
import { SelectCard } from './SelectCard'

import { BookOpenIcon } from '@heroicons/react/24/solid'
import { CodeBracketIcon, TvIcon } from '@heroicons/react/24/outline'

const users = [
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
  { id: 3, name: 'Sam Wilson', email: 'sam@example.com' },
]

const optionsCard = [
  { key: 'option1', name: 'Opción 1', icon: <BookOpenIcon className="h-6 w-6" /> },
  { key: 'option2', name: 'Opción 2', icon: <CodeBracketIcon className="h-6 w-6" /> },
  { key: 'option3', name: 'Opción 3', icon: <TvIcon className="h-6 w-6" />, disabled: true },
]

const App = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const renderRow = (
    user: { id: number; name: string; email: string },
  ) => (
    <tr key={user.id}>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-300">
        {user.name}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
        {user.email}
      </td>
    </tr>
  )

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

        <RadioGroup 
          options={[{ key: "1", value: "One" }, { key: "2", value: "Two" }]}
          onChange={() => {}}
          value='Option'
        />

        <SelectCard
          label="Selecciona una opción"
          help="Elige una de las siguientes opciones disponibles"
          options={optionsCard}
          selectedKey="option1"
          onChange={() => {}}
          renderItem={(option) => (
            <div className="flex items-center">
              {option.icon}
              <span className="ml-2">{option.name}</span>
            </div>
          )}
        />
      </div>

      <div>
        <Table className="shadow-sm border border-gray-300 dark:border-gray-700">
          <TableHeader>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
              Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
              Email
            </th>
          </TableHeader>
          <TableBody items={users} renderRow={renderRow} />
        </Table>
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
