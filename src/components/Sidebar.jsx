import React from 'react'
import Avatar from '../img/nathachaiRungsaeng.jpeg'
import SocialNetworks from './SocialNetworks.jsx'
import InformationContentner from './InformationContentner.jsx'
import CV from '../img/nathachairungsaengEN.pdf'

import '../styles/components/sidebar.sass'

const Sidebar = () => {
  return (
    <aside id="sidebar">
        <img src={Avatar} />
        <p className='title'>Developer Full Stack</p>
        <SocialNetworks />
        <InformationContentner />
        <a href={CV} download={CV} className='btn'>Download Resume</a>
    </aside>
  )
}

export default Sidebar