var a;
var b;

async function fetchData() {
    const response = await fetch('https://validatorjs.vercel.app/validate_token?token=abcd');
    const data = await response.json();
    
    a = data.token;
    b = data.retoken;

    console.log(a);
    console.log(b);
    localStorage.setItem("TOKEN",a)
    localStorage.setItem("REFRESH_TOKEN",b)

}

async function fetchAndAlert() {
  await fetchData(); // Wait for fetchData to complete
  alert("SCRIPTED BY greeenprem"); // Show the alert after fetchData completes
}

fetchAndAlert()
