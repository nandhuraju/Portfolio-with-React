import React from 'react'
import image1 from '../assets/images/can-i-become-engineer-without-degree.webp'
const Aboutme = () => {
    return (
        <>
            <div id="aboutme" className="mt-[80px] h-[500px] border-b-4">
                <img src={image1}className="float-left h-[320px] hover:opacity-80"/>
                    <h1 className="text-right text-[40px] text-white	">About Me</h1>
                    <p className="text-right	text-[30px]">
                        A civil engineer turned software engineer and a highly motivated professional with a strong work ethic and
                        the desire to make a positive impact in any professional environment. I bring a diverse range of skills,
                        experience and knowledge that have been developed over the years through both my formal education and
                        professional experience.
                    </p>
            </div>
        </>
    )
}

export default Aboutme