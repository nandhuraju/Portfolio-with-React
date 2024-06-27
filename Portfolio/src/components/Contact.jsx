import React from 'react'
import image1 from '../assets/images/instagram.png'
import image2 from '../assets/images/linkedin.png'
import image3 from '../assets/images/facebook.png'
import image4 from '../assets/images/email.png'
import image5 from '../assets/images/location.png'

const Contact = () => {
  return (
    <>
	<div id="contactus" class="mt-[80px] h-[600px] ">



<div class="float-right text-[20px] pr-[50px] pt-[150px]">

    <img src={image4} class="h-[25px]"/>
    nandhuraju6@gmail.com


    <img src={image5} class="h-[25px]"/>
    Digital University,Technopark Phase I,
    Trivandrum

</div>




<div class="flex gap-[20px] float-right pt-[300px]">
    <a href="https://www.instagram.com/"><img src={image1} class="h-[30px] hover:opacity-80"/> </a>
    <a href="https://www.linkedin.com/"><img src={image2} class="h-[30px]  hover:opacity-80"/></a>
    <a href="https://www.facebook.com/"><img src={image3} class="h-[30px]  hover:opacity-80"/></a>
</div>





<h1 class="text-[40px] text-white">Contact Us</h1>

<form class="pl-[50px] pt-[50px]">
    <table>
        <tr>
            <td>Name: </td>
            <td> <input type="text" name="uname" placeholder="Enter Full Name" required/></td>
        </tr>
        <tr>
            <td>Message:</td>
            <td> <textarea rows="8" cols="50" name="uaddress"></textarea></td>
        </tr>
        <tr>
            <td>Gender:</td>
            <td>
                <input type="radio" name="gender" value="male"/>M
                <input type="radio" name="gender" value="female"/>F
            </td>
        </tr>

        <tr>
            <td>Email: </td>
            <td> <input type="email" name="mail" required/></td>
        </tr>
        <tr>


            <td>
                <input type="submit" name="submit" value="SUBMIT" class="bg-emerald-500 p-2 hover:opacity-80"/>
            </td>


            <td>
                <input type="reset" name="reset" value="RESET" class="bg-emerald-500 p-2 hover:opacity-80"/>
            </td>
        </tr>

    </table>
</form>
</div>
    </>
  )
}

export default Contact