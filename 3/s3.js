user={
    id: 6, 
    name:"hosein",
    lastname:"zenderoh",
    roles:["student", "admin"],
    age: 10,
    scores:{ english: 10,
          math:19.5,
          physics: 14
    },
};


function addScore(c, score){
    user.scores[c]= score;
    console.log(user);

}
addScore("chemistry", 10);



function addRole(role, roles){
    user[roles]=[...user[roles], role];
    
    if(user.age< 18){
        user.status="veryyoung";
    }
    console.log(user);
}
addRole("teacher", "roles");


function addName(value, key){
    let arr=Object.entries(user);
    let newArr=[[value, key]]
    
    arr=[...arr, ...newArr];
    console.log(arr);
}
addName("fatherName", "ali");