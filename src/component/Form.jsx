import React, { useState } from 'react'

export const Form = () => {
    const[name, setName]=useState('');
    const[contact,setContact]=useState('');
    const[email, setEmail]=useState('');
    const[Location,setLocation]=useState('');
    const[qualification,setQualification]=useState('');
    const[doc,setDoc]=useState('');
    const[experience,setExperience]=useState('');
    const[company,setCompany]=useState('');
    const[skill,setSkill]=useState('');
    const[currentctc,setCurrentCtc]=useState('');
    const[expctc,setExpctc]=useState('');
    const[notice,setNotice]=useState('');
    const[relocate,setRelocate]=useState('');
    const[gender,setGender]=useState('');
    const[file,setFile]=useState('');

    const handleSumbit=(e)=>{
        e.preventDefault();
        console.log({name,experience,contact,Location,qualification,doc,email,company,skill,currentctc,expctc,notice,relocate,gender,file})
    }
   
  return (
    <div class="container">
  <div class="row">
    <div class="col-sm">
    <div class="form-group">
    <form className='mt-5'>
    <div class="form-group mt-5">
    <label for="exampleInputEmail1">Enter Name</label>
    <input type="name" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" 
    onChange={(e) => setName(e.target.value)}  placeholder="Enter name"/>
    
  </div>
  <div class="form-group mt-3">
    <label for="exampleInputEmail1">Experience</label>
    <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" 
     onChange={(e) => setExperience(e.target.value)} placeholder="Enter Experience"/>
    
  </div>

 
  <div class="form-group mt-3 ">
    <label for="exampleInputPassword1">Location</label>
    <input type="text" class="form-control" id="exampleInputPassword1" 
      onChange={(e) => setLocation(e.target.value)} placeholder="Location"/>
    </div>
  <div class="form-group mt-3 ">
    <label for="exampleInputPassword1">Enter Current CTC</label>
    <input type="number" class="form-control" id="exampleInputPassword1" 
      onChange={(e) => setCurrentCtc(e.target.value)} placeholder="Current CTC"/>
    </div>
    <select class="form-control form-control-lg mt-4"  onChange={(e) => setGender(e.target.value)}>
  <option>Gender</option>
  <option>Male</option>
  <option>Female</option>
</select>
   
</form>
    </div>
    </div>
    <div class="col-sm ">
    <div class="form-group  mt-5">
    <form>
 
  <div class="form-group mt-3 ">
    <label for="exampleInputPassword1">Contact Number</label>
    <input type="number" class="form-control" id="exampleInputPassword1" placeholder="Mobile"
      onChange={(e) => setContact(e.target.value)}/>
  </div>
  <div class="form-group mt-3">
    <label for="exampleInputPassword1">Qualification</label>
    <input type="text" class="form-control" id="exampleInputPassword1" 
      onChange={(e) => setQualification(e.target.value)}placeholder="Enter Qualification"/>
  </div>
  <div class="form-group mt-3">
    <label for="exampleInputPassword1">Skills</label>
    <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Enter Skill"
      onChange={(e) => setSkill(e.target.value)}/>
  </div>
  <div class="form-group mt-3 ">
    <label for="exampleInputPassword1">Expected CTC</label>
    <input type="number" class="form-control" id="exampleInputPassword1" placeholder="Expected CTC"
      onChange={(e) => setExpctc(e.target.value)}/>
    </div>
    <form>
    <div class="form-group mt-3 ">
    <label for="exampleInputPassword1">Relocate</label>
    <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Relocate"
      onChange={(e) => setRelocate(e.target.value)}/>
    </div>

</form>
</form>
  </div>
    </div>
    <div class="col-sm">
    <form className='mt-5'>
 
  <div class="form-group mt-3">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
    onChange={(e) => setEmail(e.target.value)} placeholder="Enter email"/>
  </div>
  <div class="form-group mt-3">
    <label for="exampleInputPassword1">Date of birth</label>
    <input type="number" class="form-control" id="exampleInputPassword1" placeholder="Enter DOB"
    onChange={(e) => setDoc(e.target.value)}/>
  </div>
 
  <div class="form-group mt-3">
    <label for="exampleInputPassword1">Current company Name</label>
    <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Current company Name"
     onChange={(e) => setCompany(e.target.value)}/>
  </div>
  <div class="form-group mt-3">
    <label for="exampleInputPassword1">Notice</label>
    <input type="number" class="form-control" id="exampleInputPassword1" placeholder="Notice period"
     onChange={(e) => setNotice(e.target.value)}/>
  </div>
  
    <div class="form-group mt-3">
    <label for="exampleFormControlFile1">Upload your CV</label>
    <input type="file" class="form-control-file" id="exampleFormControlFile1" onChange={(e) => setFile(e.target.value)}/>
  </div>
</form>
    </div>
  </div>
  <div>
  <div className='text-end'>
  <button type="button" class="btn btn-primary  mt-5" onClick={(e) =>handleSumbit(e)}>Sumbit</button>
  </div>
  </div>
</div>
    
    
  )
}
