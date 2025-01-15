function Gamestart() {
    let MArray = [
        "cat",
        "first" ,
        "second" ,
        "third",
        "cow",
        "fire",
        "dog",
        "rain"
    ]
    
    MArray = [...MArray , ...MArray]
    MArray.sort(()=> Math.random() - 0.5)
    let MDiv = document.getElementById("GameBoard")
    MDiv.innerText = ""
    MArray.forEach(element => {
        let cell = document.createElement("div")
        MDiv.appendChild(cell)
        cell.innerText = element
        cell.classList.add("cel" , "cellhide")
        cell.addEventListener("click" , ()=> {
            Validate(cell)
        })
    });
}

let FW = null
let Point = 0
let mdp = document.getElementById("mp")
function Validate(cell){
    cell.classList.remove("cellhide")
    cell.classList.add("cellshow")
    if (!FW) {
        setTimeout(()=> {
            FW = cell
        },300)
        
    }else if (FW.innerText == cell.innerText && FW !== cell) {
        setTimeout(()=> {
            FW.style.visibility = "Hidden"
            cell.style.visibility = "Hidden"
            FW = null
            Point += 1
            mdp.innerText = Point
            mdp.classList.add("getpoint")
        },300)
       
    }else {
        setTimeout(()=> {
            cell.classList.remove("cellshow")
            cell.classList.add("cellhide")
            FW.classList.remove("cellshow")
            FW.classList.add("cellhide")
            FW = null
            
        },300)
       
    }
}






window.onload = Gamestart

let Timer = document.getElementById("tp")
let sec = 60
setInterval(()=>{
    Timer.innerText = sec
    sec --
    if(sec == 0){
    
    sec = 60
    let mdpi = document.getElementById("mp")
    mdpi.innerText = 0
    Gamestart()
    }
    

} , 1000)
