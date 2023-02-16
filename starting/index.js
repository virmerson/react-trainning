const root =  document.getElementById("root")

function NavBar() {
        return ( <div> A | B | C </div>)
}

function MainContent(){
    return (<h1> I'm the main content :D</h1>)
}


ReactDOM.render(
    <div>
         <NavBar/>
         <MainContent/>
    </div>
    , root) 