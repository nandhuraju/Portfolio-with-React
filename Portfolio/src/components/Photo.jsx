import React from 'react'
import photo from '../assets/images/photo.png'
const Photo = () => {
    return (
        <>
            <div className="h-[900px] border-b-4">
                <img src={photo} className="float-right hover:opacity-80" />

                <h1 className="text-[100px] text-left pt-[300px]">Hello World!!! <br />I'm Nandhu Raju</h1>



            </div>
        </>
    )
}

export default Photo