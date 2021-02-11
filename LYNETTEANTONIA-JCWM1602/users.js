function showUserList(){
    let getTable = document.getElementById("table-user")
    let getTbody = document.getElementById("tbody")

    let tr = ""
    for(i=0; i< dataUser.length; i++){
        tr += `
            <tr>
                <td>
                    <center>${i+1}</center>
                </td>
                <td>
                    <center>${dataUser[i].username}</center>
                </td>
                <td>
                    <center>${dataUser[i].email}</center>
                </td>
                <td>
                    <center>${dataUser[i].role}</center>
                </td>
                <td>
                    <center>
                        <input type="button" name="button-edit" value="EDIT">
                        <input type="button" name="button-delete" value="DELETE">
                    </center>
                </td>
                <tr>`
    }

    getTbody.innerHTML = tr
}
showUserList()

function addUser(){

    let input = document.getElementById("username")

    let username = input[0].value
    let email = input[1].value
    let role = input[2].value

    if(username && email && role){
        dataUser.push({
            username: username,
            email: email,
            role: role
        })

        showUserList()

        input[0].value = ""
        input[1].value = ""
        input[2].value = ""
    }
}
document.getElementById("add-user").addEventListener("click",addUser)