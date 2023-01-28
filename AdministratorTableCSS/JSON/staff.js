
            var tableStaffData = [{
                "email": "s00001@ive.airline.staff.hk",
                "staffID": "s00001",
                "fullname": "Chan Siu Kai",
                "password": "#Sdcpl23",
                "jobs": "Administrator"
            }, {
                "email": "s00002@ive.airline.staff.hk",
                "staffID": "s00002",
                "fullname": "Wong Chin Wing",
                "password": "qW2323s*",
                "jobs": "Administrator"
            }, {
                "email": "s00003@ive.airline.staff.hk",
                "staffID": "s00003",
                "fullname": "Lai Wai Man",
                "password": "wD23#rv",
                "jobs": "Operator"
            }, {
                "email": "s00004@ive.airline.staff.hk",
                "staffID": "s00004",
                "fullname": "Lo Ka Hong",
                "password": "e32dg1*S",
                "jobs": "Operator"
            }, {
                "email": "s00005@ive.airline.staff.hk",
                "staffID": "Mary123",
                "fullname": "Yu Kwai Shing",
                "password": "qaZe124#",
                "jobs": "Operator"
            }]

            for(var i in tableStaffData)
        {
            var row = `<tr>
                                <td class="tdSData">${tableStaffData[i].email}</td>
                                <td class="tdSData">${tableStaffData[i].staffID}</td>
                                <td class="tdSData">${tableStaffData[i].fullname}</td>
                                <td class="tdSData">${tableStaffData[i].password}</td>
                                <td class="tdSData">${tableStaffData[i].jobs}</td>
                                <td><button type="button" class="edit" style="width: 50px">Edit</button></td>
                                <td><button>Delete</button></td>
                             </tr>`
            var Stafftable = $('#staff-table-body')
            Stafftable.append(row);
        }

            document.onclick = function() {
                var obj = event.srcElement;
                if(obj.type == "button"){
                    // alert("123");
                }
            }


            // $(document).ready(function() {
            //     $("#edit").click(function() {
            //         `<tr>
            //                     <td class="tdSData"><input type="text" class="changeSmall" value="' + ${tableStaffData[i].email} + '"></td>
            //                     <td class="tdSData">${tableStaffData[i].staffID}</td>
            //                     <td class="tdSData">${tableStaffData[i].fullname}</td>
            //                     <td class="tdSData">${tableStaffData[i].password}</td>
            //                     <td class="tdSData">${tableStaffData[i].jobs}</td>
            //                     <td><button class="edit">Edit</button></td>
            //                     <td><button>Delete</button></td>
            //                  </tr>`
            //     })
            // })
