import React from 'react'
import image1 from '../assets/images/student-academic-success.jpeg'
const Education = () => {
  return (
    <>
	<div id="education" className="mt-[30px] h-[500px] border-b-4">

<img src={image1} className="float-left h-[320px] hover:opacity-80"/>
<h1 className="text-right text-[40px] text-white mr-[20px]">Education</h1>


<table className="float-right text-[20px] outline rounded p-[20px] mr-[30px] bg-emerald-500">
    <tr>
        <th className="outline p-[20px] rounded">Education</th>
        <th className="outline rounded">University</th>
        <th className="outline p-[20px]   rounded"> Stream/Branch</th>
        <th className="outline p-[20px] rounded"> Year</th>
        <th className="outline p-[20px] rounded "> Percentage of Marks</th>
    </tr>
    <tr>
        <td className="pl-[10px] pr-[10px]"> PG Diploma in Block Chain Technology</td>
        <td className="pl-[10px] pr-[10px]">Digital University of Kerala</td>
        <td> Blokchain Technology</td>
        <td className="pl-[10px] pr-[10px]"> 2024-</td>
        <td className="text-center"> -</td>
    </tr>
    <tr>
        <td className="pl-[10px] pr-[10px]"> Master Diploma in Interior Architecture Design</td>
        <td className="pl-[10px] pr-[10px]">CAD Centre</td>
        <td> -</td>
        <td className="pl-[10px] pr-[10px]"> 2014-2015</td>
        <td className="text-center"> -</td>
    </tr>
    <tr>
        <td className="pl-[10px] pr-[10px]"> Btech</td>
        <td className="pl-[10px] pr-[10px]">University of Kerala</td>
        <td className="pl-[10px] pr-[10px]"> Civil Engineering</td>
        <td className="pl-[10px] pr-[10px]"> 2010-2014</td>
        <td className="text-center"> 61</td>
    </tr>
    <tr>
        <td className="pl-[10px] pr-[10px]"> 12th</td>
        <td className="pl-[10px] pr-[10px]">CBSE</td>
        <td className="pl-[10px] pr-[10px]"> Maths-Computer</td>
        <td className="pl-[10px] pr-[10px]">2010</td>
        <td className="text-center"> 60</td>
    </tr>
    <tr>
        <td className="pl-[10px] pr-[10px]"> 10th</td>
        <td className="pl-[10px] pr-[10px]">CBSE</td>
        <td className="pl-[10px] pr-[10px]"> Regular</td>
        <td className="pl-[10px] pr-[10px]"> 2008</td>
        <td className="text-center"> 71</td>
    </tr>
</table>

</div>
    </>
  )
}

export default Education