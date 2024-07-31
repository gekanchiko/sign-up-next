import { ReactNode } from 'react'

interface IfProps {
  condition: boolean | number | string;
  children: ReactNode;
}

const If = (props: IfProps) => {
  const { children, condition } = props

  return condition ? children : null
}

export default If