{
    console.log("inside controller");
    const users = usemodel.allusers();
    return users;
}
exports.getUser=(name)=>
{
    const users = usermodel.allusers();
    let objArray = users.fillter(x=>x.name===name);
    return objArray[0];
}