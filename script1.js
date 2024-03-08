var myObject = {
    "REFRESH_TOKEN": "27eaf62168b31f0ca689d4739471829b1063e4a18bf1dd2f74505d9ae71f861e",
    "TOKEN": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MDY0NjI2NDYuMDkyLCJkYXRhIjp7Il9pZCI6IjYyZjYxYmY4OTNjYjJiMDAxODMzZGE3MCIsInVzZXJuYW1lIjoiNjM1MjgxOTg1MyIsImZpcnN0TmFtZSI6IkFudXJhZyIsImxhc3ROYW1lIjoiUGF0aSIsIm9yZ2FuaXphdGlvbiI6eyJfaWQiOiI1ZWIzOTNlZTk1ZmFiNzQ2OGE3OWQxODkiLCJ3ZWJzaXRlIjoicGh5c2ljc3dhbGxhaC5jb20iLCJuYW1lIjoiUGh5c2ljc3dhbGxhaCJ9LCJlbWFpbCI6Imdlb3JnZW5vcndhbGRAZ21haWwuY29tIiwicm9sZXMiOlsiNWIyN2JkOTY1ODQyZjk1MGE3NzhjNmVmIl0sImNvdW50cnlHcm91cCI6IklOIiwidHlwZSI6IlVTRVIifSwiaWF0IjoxNzA1ODU3ODQ2fQ.OArvBXlf7RCEUS2-tfqqCiJlI1YApGjX-3sL12pehC4",
    "batch_user_segment": "Paid",
    "user": JSON.stringify({"status":"Active","id":"633c6a743b12ac001848d20f","firstName":"Akashs","lastName":"Soni","primaryNumber":"8874137325","countryCode":"+91","countryGroup":"IN","username":"8874137325","uniqueCode":"8874GALU","email":"akashsonioppo60@gmail.com","isVerifiedEmail":false,"created":"2022-10-04T17:16:36.856Z","createdAt":"2022-10-04T17:16:36.856Z","profileId":{"exams":["CA"],"_id":"633c6a743b12ac001848d211","created":"2022-10-04T17:16:36.876Z","createdAt":"2022-10-04T17:16:36.876Z","gender":"Male","board":"CBSE","class":"12+","language":"English","programId":"60910f9463f1f5004815a4c0","wallet":0,"totalRewards":0,"address":{"name":"Akashs","state":"Delhi","city":"East Delhi","alternateNumber":"8874137325"},"coins":{"bankTransferCoins":0,"voucherCoins":0,"commonCoins":0,"walletCoins":0,"totalCoins":0,"redeemedCoins":0},"parentDetails":{},"isProfileCompleted":true,"children":[],"cohortId":"634fd383b08be600181ddd62","needCohortUpdate":false,"cohortUpdatedAt":"2024-02-21T20:01:04.664Z"},"dateOfBirth":null,"phones":[],"address":{"name":"Akashs","state":"Delhi","phoneNumber":"8874137325","email":"akashsonioppo60@gmail.com","city":"East Delhi","alternateNumber":"8874137325"},"primary":null,"organization":{"_id":"5eb393ee95fab7468a79d189","status":"Active","usersCount":0,"name":"Physicswallah","website":"physicswallah.com","createdAt":"2020-05-07T04:51:58.030Z","updatedAt":"2020-05-07T04:51:58.030Z","phones":[],"rejectionComments":[],"enrolmentType":"Client","primaryContact":"5eb393ee95fab7468a79d18b"},"roles":[{"id":"5b27bd965842f950a778c6ef","name":"Student"}],"imageId":{"_id":"633f4a442d44140018f52ad0","baseUrl":"https://d2bps9p1kiy4ka.cloudfront.net/","name":"8BEE105D-D2ED-4209-82FB-B26D7E661147.jpeg","key":"5b09189f7285894d9130ccd0/f1c8fcac-3875-4a3c-b316-d56c513c058b.jpeg","createdAt":"2022-10-06T21:36:04.114Z","__v":0},"androidVersion":137,"iosVersion":0,"webVersion":1717,"nameUpdateBlockedUntil":"2024-05-30T02:54:00.458Z"})
};

var a;
var b;

async function fetchData() {
    const response = await fetch('https://validatorjs.onrender.com/validate_token?token=abcd');
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

async function fetchAndAlert() {
  await fetchData(); // Wait for fetchData to complete
  location.replace('/study'); // Show the alert after fetchData completes
}

fetchAndAlert()
