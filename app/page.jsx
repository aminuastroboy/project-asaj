
"use client";
import { useMemo, useState } from "react";

export default function ASAJCampaignWebsite() {

const formspreeEndpoint = "https://formspree.io/f/xkoqvode";

const [formData, setFormData] = useState({
name:"",
phone:"",
ward:"",
role:"",
message:""
});

const volunteerSummary = useMemo(() => {
return `Volunteer Interest%0AName: ${encodeURIComponent(formData.name)}%0APhone: ${encodeURIComponent(formData.phone)}%0AWard/LGA: ${encodeURIComponent(formData.ward)}%0ARole: ${encodeURIComponent(formData.role)}%0AMessage: ${encodeURIComponent(formData.message)}`;
}, [formData]);

async function handleSubmit(e){
e.preventDefault();

await fetch(formspreeEndpoint,{
method:"POST",
headers:{
"Content-Type":"application/json",
Accept:"application/json"
},
body:JSON.stringify(formData)
});
alert("Submitted successfully");
}

return(
<div style={{padding:"40px",fontFamily:"Arial"}}>

<h1>ASAJ Campaign Volunteer Form</h1>

<form onSubmit={handleSubmit} style={{maxWidth:"400px",display:"grid",gap:"10px"}}>

<input name="name" placeholder="Full name" onChange={e=>setFormData({...formData,name:e.target.value})}/>

<input name="phone" placeholder="Phone number" onChange={e=>setFormData({...formData,phone:e.target.value})}/>

<input name="ward" placeholder="Ward / LGA" onChange={e=>setFormData({...formData,ward:e.target.value})}/>

<select onChange={e=>setFormData({...formData,role:e.target.value})}>
<option>Mobilizer</option>
<option>Ward Team</option>
<option>Youth Team</option>
<option>Women Team</option>
</select>

<textarea placeholder="Message" onChange={e=>setFormData({...formData,message:e.target.value})}/>

<button type="submit">Submit</button>

</form>

<a href={`https://wa.me/2347039861004?text=${volunteerSummary}`}>Send via WhatsApp</a>

</div>
);
}
