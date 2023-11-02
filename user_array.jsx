export function Users() 
{
    let users=[{name:"Chari", email :"chari@gmail.com", phone:8142440558, gender: "Male", dob :"02/11/2023"},
    {name:"ashok", email :"ashok@gmail.com", phone:9856423474, gender: "Male", dob :"02/11/2023"},
    {name:"malli", email :"malli@gmail.com", phone:8974561254, gender: "Male", dob :"02/11/2023"}]
    return <>
    {users.map((user)=>
    <div className="margin-20">
        <div className="margin-10"> 
        <label>Name:</label>
        <label>{user.name} </label>
        </div>
        <div className="margin-10">    
        <label>Email:</label> 
        <label>{user.email}</label>   
        </div>  
        <div className="margin-10">
        <label>Phone:</label>
        <label>{user.phone}</label>    
        </div>
        <div className="margin-10">   
        <label>Gender:</label>
        <label>{user.gender}</label>
        </div>
        <div className="margin-10">
        <label>DOB:</label>
        <label>{user.dob}</label>
        </div>
    </div>
    )
}

   </>
}    