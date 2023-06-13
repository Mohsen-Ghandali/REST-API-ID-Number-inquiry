let root = document.getElementById("root")
let btn = document.getElementById("btn")
let html = ``
const get = async () => {
    let code = document.getElementsByName("id")[0].value
    let request = await fetch("http://localhost:3000/user")
    let data = await request.json()
    let person = await data.filter((elem) => {
        if (elem.id === code) {
            return elem
        }
    })
    html = `
  <h2>${person[0].id}</h2>
  <h2>${person[0].firstName}</h2>
  <h2>${person[0].lastName}</h2>
  `
    root.innerHTML = html
}

btn.addEventListener("click", get)

