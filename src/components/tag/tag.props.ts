import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react"

export interface TagProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  size?: 'sm' | 'md'
  color?: 'red' | 'green' | 'primary'
  children: ReactNode
}