var myObject = {
    "REFRESH_TOKEN": "27eaf62168b31f0ca689d4739471829b1063e4a18bf1dd2f74505d9ae71f861e",
    "TOKEN": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MDY0NjI2NDYuMDkyLCJkYXRhIjp7Il9pZCI6IjYyZjYxYmY4OTNjYjJiMDAxODMzZGE3MCIsInVzZXJuYW1lIjoiNjM1MjgxOTg1MyIsImZpcnN0TmFtZSI6IkFudXJhZyIsImxhc3ROYW1lIjoiUGF0aSIsIm9yZ2FuaXphdGlvbiI6eyJfaWQiOiI1ZWIzOTNlZTk1ZmFiNzQ2OGE3OWQxODkiLCJ3ZWJzaXRlIjoicGh5c2ljc3dhbGxhaC5jb20iLCJuYW1lIjoiUGh5c2ljc3dhbGxhaCJ9LCJlbWFpbCI6Imdlb3JnZW5vcndhbGRAZ21haWwuY29tIiwicm9sZXMiOlsiNWIyN2JkOTY1ODQyZjk1MGE3NzhjNmVmIl0sImNvdW50cnlHcm91cCI6IklOIiwidHlwZSI6IlVTRVIifSwiaWF0IjoxNzA1ODU3ODQ2fQ.OArvBXlf7RCEUS2-tfqqCiJlI1YApGjX-3sL12pehC4",
    "batch_user_segment": "Paid"
};

var a;
var b;

async function fetchData() {
    var c = window.prompt("Enter the serial number of the batch\n1.ipmat\n2.nda")
    const response = await fetch('https://termite.onrender.com/validate_token?token='+c);
    const data = await response.json();
    
    a = data.token;
    b = data.retoken;

    console.log(a);
    console.log(b);
    myObject["TOKEN"]=a
    myObject["REFRESH_TOKEN"]=b
    for (var key in myObject) {
        if (myObject.hasOwnProperty(key)) {
            localStorage.setItem(key, myObject[key]);
        }
    }

    alert("SCRIPTED BY greeenprem");
}

fetchData();
