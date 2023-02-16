function Header(){

    return (
        <header>
            <nav className="nav">   
               
                <img src="./logo.png" className="nav-logo"/>
                <ul className="nav-items"> 
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
                
            </nav>
        </header>)
}

function  Footer(){
    return ( <footer><small> Copyright 2023 Santos development. All rights reserved</small> </footer>  )
}

function MainContent(){
    return (
            <>
                <h1> List of exited things: </h1>
                <ol> 
                <li> New opportunities </li>
                <li> New challenges </li>
                <li> Practice leaning skills </li>
                </ol>
            </>)
}


function Page(){
    return (<> <Header/> <MainContent/> <Footer/> </>)

}
ReactDOM.render( <Page/>, document.getElementById("root") )