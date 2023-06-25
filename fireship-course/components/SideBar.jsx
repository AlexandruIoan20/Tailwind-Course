import { BsPlus, BsFillLightningFill, BsGearFill } from 'react-icons/bs'; //react icons components 
import { FaFire, FaPoo } from 'react-icons/fa';

const SideBarIcon = ({ icon, text = 'tooltip' }) => { 
    return ( 
        <div className='sidebar-icon group'>
            { icon }
            <span className='sidebar-tooltip group-hover:scale-100'>
                { text }
            </span>
        </div>
    )
}

const SideBar = () => {
  return (
    <div className='fixed top-0 left-0 w-16 flex flex-col bg-primary text-white shadow-lg dark:bg-white dark:text-black'>
        <SideBarIcon icon = { <FaFire size ='28' /> } /> 
        <SideBarIcon icon = { <BsPlus size ='32' /> } /> 
        <SideBarIcon icon = { <BsFillLightningFill size ='20' /> } /> 
        <SideBarIcon icon = { <FaPoo size ='20' /> } /> 
    </div>
  )
}

export default SideBar