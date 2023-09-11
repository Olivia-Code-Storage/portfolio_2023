// Stacks.ts
export interface StackType {
  skill: {
    img: string
    name: string
    description: string
  }
  category: string
}

export interface StackProps {
  $isHovered: boolean
  $category: string
}
