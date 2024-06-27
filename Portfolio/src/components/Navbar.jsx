import React from 'react'

const Navbar = () => {
  return (
    <>
    <div>
		
    <ul className="inline-flex  gap-6 text-[30px] text-white ">

    <li><a href="" className="hover:bg-violet-600 p-[10px] rounded"> Home</a></li>
    <li><a href="#aboutme" className="hover:bg-violet-600 p-[10px] rounded "> About Me </a></li>
    <li><a  href="#experience" className="hover:bg-violet-600 p-[10px] rounded"> Experience</a></li>
    <li><a  href="#education" className="hover:bg-violet-600 p-[10px] rounded"> Education </a></li>

    <li><a  href="#contactus" className="hover:bg-violet-600 p-[10px] rounded "> Contact </a></li>
    
    </ul>

</div>
</>
  )
}

export default Navbar