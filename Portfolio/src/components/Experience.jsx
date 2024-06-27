import React from 'react'
import image1 from '../assets/images/A civil engineer at work-1.webp'
const Experience = () => {
  return (
    <>
	<div id="experience" className="mt-[80px] h-[500px] border-b-4">
		<img src={image1} className="h-[320px] float-right hover:opacity-80"/>
		<h1 className="text-[40px] text-white">Experience</h1>
		<p className="text-left	text-[30px]">
			Have experienced working as Civil Engineer for more than 5 years.Being working as Accredited Engineer in SC
			Development Office,got an opportunity to explore the world of Blockchain Technology.So currently pursuing
			Post Graduate Diploma in Blockchain Technology.
		</p>
	</div>

    </>
  )
}

export default Experience