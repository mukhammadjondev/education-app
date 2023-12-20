import { ReactNode } from "react"

export interface TagProps {
  size?: 'sm' | 'md'
  color?: 'red' | 'green' | 'primary'
  children: ReactNode
}