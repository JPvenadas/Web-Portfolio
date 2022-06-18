import { useRef } from 'react'
import { Navlink } from '../../styled-components/navbar'


const Links = ({name, padding, href}) => {
  const navlinks = useRef([])

  return (
    <Navlink  className='.nav-link' padding={padding}>
      <a href={href}>{name}</a>
    </Navlink>
  )
}

export default Links
