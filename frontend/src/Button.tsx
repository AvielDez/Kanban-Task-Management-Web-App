/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import useStore from "./bearStore"

export default function Button(){
  const increase = useStore(boom => boom.increase)
  const count = useStore(boom => boom.count)
  return (
      <button onClick={()=>increase(1)}>Count is: {count}</button>
  )
}