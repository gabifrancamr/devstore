'use client'

import { useState } from 'react'

export function Button() {
  const [count, setCount] = useState(0)

  function addCart() {
    setCount((state) => state + 1)
  }

  return <button onClick={addCart}>adicionar, ({count})</button>
}
