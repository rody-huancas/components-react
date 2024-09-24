import React from 'react'
import classNames from 'classnames'

type StepperProps = {
  steps      : string[]
  currentStep: number
}

const Stepper: React.FC<StepperProps> = ({ steps, currentStep }) => {
  return (
    <div className="flex justify-between items-center">
      {steps.map((step, index) => (
        <div key={index} className="relative flex-1">
          {index !== 0 && (
            <div
              className={classNames(
                'absolute top-1/2 transform -translate-y-1/2 h-1 w-full',
                index <= currentStep ? 'bg-blue-500' : 'bg-gray-300',
              )}
            />
          )}
          <div className="flex items-center">
            <div
              className={classNames(
                'rounded-full h-10 w-10 flex items-center justify-center border-2',
                index <= currentStep
                  ? 'bg-blue-500 border-blue-500 text-white'
                  : 'bg-white border-gray-300 text-gray-500',
              )}
            >
              {index + 1}
            </div>
            <div className="ml-4 text-sm">{step}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Stepper
