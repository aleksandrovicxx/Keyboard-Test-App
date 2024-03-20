let allDivs = document.querySelectorAll("button")


document.addEventListener("keydown", (e) =>{ 

    let pushedButton = (e.code);

    pushedButton = pushedButton.toUpperCase()
    console.log(e.code);
    

    allDivs.forEach(div =>{
        if(div.value == pushedButton){
            div.style.backgroundColor = "green"
        }
        else if(pushedButton == ' '){
            let space = document.getElementById('space');
            space.style.backgroundColor = 'green'
        }
            
    })
});
