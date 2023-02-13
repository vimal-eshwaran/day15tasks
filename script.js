function submit(e)
{
    e.preventDefault()
    console.log(e);
    const formData = new FormData(form)
    let division1= document.getElementById("table-content")


for (const pair of formData.entries()) {
    let row = division1.insertRow(-1)
  console.log(pair)
  let cell1 = row.insertCell(-1)
      cell1.innerHTML = pair[0]
  let cell2 = row.insertCell(-1)
      cell2.innerHTML = pair[1]
      
   
}

}

let form = document.getElementById('form')

form.addEventListener('submit', submit)

