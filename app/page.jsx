
"use client";
import { useState } from "react";

export default function Home(){

const formspreeEndpoint = "https://formspree.io/f/xkoqvode";

const [form,setForm]=useState({
name:"",
phone:"",
ward:"",
role:"",
message:""
});

async function submit(e){
e.preventDefault();

await fetch(formspreeEndpoint,{
method:"POST",
headers:{
"Content-Type":"application/json",
Accept:"application/json"
},
body:JSON.stringify(form)
});

alert("Volunteer form submitted successfully");
}

return(
<div style={{fontFamily:"Arial",padding:"40px",maxWidth:"900px",margin:"auto"}}>

<h1>ASAJ 2027 Campaign</h1>

<p>
Official volunteer registration platform for Hon. Abdulkareem Sabo Abdullahi (ASAJ)
House of Representatives – Yola North, Yola South & Girei.
</p>

<hr/>

<h2>Campaign Vision</h2>

<ul>
<li>Youth empowerment</li>
<li>Education and skills development</li>
<li>Women inclusion</li>
<li>Infrastructure development</li>
<li>Technology driven governance</li>
</ul>

<hr/>

<h2>Volunteer Registration</h2>

<form onSubmit={submit} style={{display:"grid",gap:"10px",maxWidth:"400px"}}>

<input placeholder="Full Name" onChange={e=>setForm({...form,name:e.target.value})}/>

<input placeholder="Phone Number" onChange={e=>setForm({...form,phone:e.target.value})}/>

<input placeholder="Ward / LGA" onChange={e=>setForm({...form,ward:e.target.value})}/>

<select onChange={e=>setForm({...form,role:e.target.value})}>
<option value="">Select Role</option>
<option>Mobilizer</option>
<option>Youth Team</option>
<option>Ward Team</option>
<option>Women Team</option>
<option>Media Volunteer</option>
</select>

<textarea placeholder="Message (optional)" onChange={e=>setForm({...form,message:e.target.value})}/>

<button type="submit">Submit Form</button>

</form>

<br/>

<a href="https://formspree.io/f/xkoqvode">
Open Formspree Direct Form
</a>

<hr/>

<h3>Campaign Contact</h3>

<p>Email: asajjimeta05@gmail.com</p>
<p>Phone: 07039861004</p>

</div>
)
}
