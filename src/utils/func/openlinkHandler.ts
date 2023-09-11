import { LinkProps } from '../../interface/componentTypes'

export const openLinkHandler = ({ name, link }: LinkProps) => {
  if (name === 'Email') return
  window.open(link, '_blank', 'noopener')
}
