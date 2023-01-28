
var tableData = [
    {
        'email': 'Mary312321@gmail.com',
        'username': 'Mary123',
        'class': 'Economy Class',
        'starting':'HongKong',
        'destination':'Shanghai',
        'boardingdate':'15/11/2021',
        'arrivaldate':'17/11/2021',
        'price':'HKD 8216'
    },{
        "email": "Ivanqwe123@gmail.com",
        "username": "Ivan123",
        "class": "Economy Class",
        "starting":"HongKong",
        "destination":"ShangHai",
        "boardingdate":"24/09/2021",
        "arrivaldate":"25/09/2021",
        "price":"HKD 2615"
    } ,{
        "email": "Chris12334@gmail.com",
        "username": "Chris123",
        "class": "Economy Class",
        "starting":"Kansai",
        "destination":"HongKong",
        "boardingdate":"24/09/2021",
        "arrivaldate":"26/09/2021",
        "price":"HKD 2173"
    } ,{
        "email": "Arise3wes@gmail.com",
        "username": "AriseWWW",
        "class": "Economy Class",
        "starting":"HongKong",
        "destination":"Kansai",
        "boardingdate":"02/12/2021",
        "arrivaldate":"04/12/2021",
        "price":"HKD 2615"
    } ,{
        "email": "Lorry3qweqwe@gmail.com",
        "username": "Lorry333",
        "class": "First Class",
        "starting":"Kansai",
        "destination":"ShangHai",
        "boardingdate":"05/03/2022",
        "arrivaldate":"07/03/2022",
        "price":"HKD 25640"
    } ,{
        "email": "Horry4qweqwe@gmail.com",
        "username": "Lorry333",
        "class": "First Class",
        "starting":"Taoyuan",
        "destination":"Shanghai",
        "boardingdate":"24/11/2022",
        "arrivaldate":"25/11/2022",
        "price":"HKD 22547"
    } ,{
        "email": "Andy4qweqwe@gmail.com",
        "username": "Lorry333",
        "class": "Premium Economy",
        "starting":"Shanghai",
        "destination":"Taoyuan",
        "boardingdate":"16/06/2022",
        "arrivaldate":"18/06/2022",
        "price":"HKD 19547"
    }]

var row = ''

for (var i in tableData){
    // var name = table + i
  row += `<tr>
                <td class="tdDatashow" id="ShowDataInfo">${tableData[i].email}</td>
                <td class="tdData">${tableData[i].username}</td>
                <td class="tdDataA">${tableData[i].class}</td>
                <td class="tdDataA">${tableData[i].starting}</td>
                <td class="tdDataA">${tableData[i].destination}</td>
                <td class="tdDataA">${tableData[i].boardingdate}</td>
                <td class="tdDataA">${tableData[i].arrivaldate}</td>
                <td class="tdDataA">${tableData[i].price}</td>
                <td><button class="Custedit">Edit Order</button></td>
                <td><button class="Custcancel" onclick="delTable()">Cancel Order</button></td>
             </tr>`

}


row += '<tr id="editData">\n                                ' +
    '<td>Tom123@gmail.com</td>\n                                ' +
    '<td>Tom123</td>\n                                ' +
    '<td>First Class</td>\n                                ' +
    '<td>Tokyo</td>\n                                ' +
    '<td>ShangHai</td>\n                               ' +
    ' <td>05/03/2022</td>\n                                ' +
    '<td>07/03/2022</td>\n                                ' +
    '<td>HKD 25640</td>\n                                ' +
    '<td><button class="Custedit">Edit Order</button></td>\n               ' +
    ' <td><button class="Custcancel">Cancel Order</button></td>\n                               ' +
    ' </tr>'


var table = $('#table-body')
table.append(row);

// }