import React, { useState } from 'react'
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

const CounterCard = ({icon, number, head, text, }) => {
  const [counterOn, setCounterOn] = useState(false)

  return (
    <div className="flex flex-row space-x-5 lg:px-6">
        <div>{icon}</div>
        <div className='space-y-1'>
            <h3 className="font-bold text-4xl">
              <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                {counterOn && <CountUp start={0} end={number} duration={2} delay={0}/>}
              </ScrollTrigger>
            </h3>
            <p className='text-sm'><span className="font-bold">{head}</span>{text}</p>
        </div>
    </div>
  )
}

export default CounterCard