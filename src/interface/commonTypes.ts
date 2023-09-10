// Layout.tsx
export interface LayoutProps {
  children: React.ReactNode
}

// Tags.tsx
export interface TagProps {
  tags: string
}

// Button.tsx
export interface ButtonProps {
  links: {
    바로가기?: string
    GitHub: string
    Belog: string
    Notion?: string
  }
}
