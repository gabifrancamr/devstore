'use client'

import { ReactNode, useState } from 'react'

export function Button({ children }: { children: ReactNode }) {
  const [count, setCount] = useState(0)

  function addCart() {
    setCount((state) => state + 1)
  }

  return (
    <button onClick={addCart}>
      adicionar, ({count}){children}
    </button>
  )
}
