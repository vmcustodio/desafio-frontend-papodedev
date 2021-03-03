var cor = document.querySelectorAll("[name=cor]");
console.log(cor)
cor.forEach((element)=>{
    element.addEventListener("change",(event)=>{
        var valor= event.target.value;
        if (valor=="verde"){
            document.querySelector("#tenisfoto").src="./img/tenis-verde.png"
            document.querySelector("#tenisbox").style.setProperty("--corprincipal", "#b5db48")
        }
        else if (valor=="vermelho"){
            document.querySelector("#tenisfoto").src="./img/tenis-vermelho.png"
            document.querySelector("#tenisbox").style.setProperty("--corprincipal", "#ff3838");
        }
        else if(valor=="azul"){
            document.querySelector("#tenisfoto").src="./img/tenis-azul.png"
            document.querySelector("#tenisbox").style.setProperty("--corprincipal", "#3864ff")
        }
    })
})
