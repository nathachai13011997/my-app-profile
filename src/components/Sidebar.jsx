import React from 'react'
import Avatar from '../img/nathachaiRungsaeng.jpeg'
import SocialNetworks from './SocialNetworks.jsx'
import InformationContentner from './InformationContentner.jsx'
import Resume from '../img/nathachaiEn27012023.pdf'

import '../styles/components/sidebar.sass'

const Sidebar = () => {
  return (
    <aside id="sidebar">
        <img src={Avatar} />
        <p className='title'>Developer Full Stack</p>
        <SocialNetworks />
        <InformationContentner />
        <a href={Resume} download={Resume} className='btn'>Download Resume</a>
    </aside>
  )
}

export default Sidebar