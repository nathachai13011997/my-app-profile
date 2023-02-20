import React from 'react'
import Avatar from '../img/nathachaiRungsaeng.jpeg'
import SocialNetworks from './SocialNetworks.jsx'
import InformationContentner from './InformationContentner.jsx'
import CV2 from '../img/nathachaiENv2.pdf'

import '../styles/components/sidebar.sass'

const Sidebar = () => {
  return (
    <aside id="sidebar">
        <img src={Avatar} />
        <p className='title'>Developer Full Stack</p>
        <SocialNetworks />
        <InformationContentner />
        <a href={CV2} download={CV2} className='btn'>Download Resume</a>
    </aside>
  )
}

export default Sidebar