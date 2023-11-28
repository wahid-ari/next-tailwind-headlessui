import React, { useEffect, useRef, useState } from 'react';

export default function Stepper({ steps, currentStepNumber }) {
  const [stepperSteps, setStep] = useState([]);
  const stepsStateRef = useRef();
  useEffect(() => {
    const stepsState = steps.map((step, index) => {
      const stepObj = {};
      stepObj.description = step;
      stepObj.completed = false;
      stepObj.highlighted = index === 0 ? true : false;
      stepObj.selected = index === 0 ? true : false;
      return stepObj;
    });
    stepsStateRef.current = stepsState;
    const currentSteps = updateStep(currentStepNumber - 1, stepsState);
    setStep(currentSteps);
  }, []);
  useEffect(() => {
    const currentSteps = updateStep(currentStepNumber - 1, stepsStateRef.current);
    setStep(currentSteps);
  }, [currentStepNumber]);
  function updateStep(stepNumber, steps) {
    const newSteps = [...steps];
    let stepCounter = 0;
    while (stepCounter < newSteps.length) {
      //current step
      if (stepCounter === stepNumber) {
        newSteps[stepCounter] = {
          ...newSteps[stepCounter],
          highlighted: true,
          selected: true,
          completed: false,
        };
        stepCounter++;
      }
      // Past step
      else if (stepCounter < stepNumber) {
        newSteps[stepCounter] = {
          ...newSteps[stepCounter],
          highlighted: false,
          selected: true,
          completed: true,
        };
        stepCounter++;
      }
      // Future steps
      else {
        newSteps[stepCounter] = {
          ...newSteps[stepCounter],
          highlighted: false,
          selected: false,
          completed: false,
        };
        stepCounter++;
      }
    }
    return newSteps;
  }
  const stepsDisplay = stepperSteps.map((step, index) => {
    return (
      <div key={index} className={index !== stepperSteps.length - 1 ? 'flex w-full items-center' : 'flex items-center'}>
        <div className='relative flex flex-col items-center text-gray-600 dark:text-gray-300'>
          <div
            className={`flex h-8 w-8 items-center justify-center rounded-full border-2 border-gray-300 transition duration-500 ease-in-out ${
              step.selected ? 'bg-teal-600 font-bold text-white' : ''
            }`}
          >
            {step.completed ? <span className='text-lg font-bold text-white'>✓</span> : index + 1}
          </div>
          <div
            className={`absolute top-0  mt-10 text-center text-xs font-medium uppercase ${
              step.highlighted ? 'text-gray-900 dark:text-white' : 'text-gray-400'
            }`}
          >
            {' '}
            {step.description}{' '}
          </div>
        </div>
        <div
          className={`flex-auto border-t-2 transition duration-500 ease-in-out ${
            step.completed ? 'border-teal-600' : 'border-gray-300'
          }`}
        >
          {' '}
        </div>
      </div>
    );
  });
  return <div className='mx-4 flex items-center justify-between p-4'>{stepsDisplay}</div>;
}
