const h1 = document.createElement("h1");
h1.textContent = "Content YES"
h1.className = "header"
//document.querySelector("#root").appendChild(h1)

console.log(h1)

const element = <h1> Hello </h1>

console.log(element)

ReactDOM.render(
    <div> 
        <h1> Hello </h1> 
        <p>teste</p>  
    </div>, document.getElementById("root") ) 
