
//import './App.css'

//Header Component
const Header = () => {
    return ( <div>
        This is a simple Header
    </div> );
}

//Content Component
const Content = (props) => {
    //also by destructuring name,age=props
    return ( <div>My Name is : {props.name} and age is : {props.age}</div> );
}

//Footer Component
const Footer = () => {
    return ( <div>
        This is a simple footer
        </div> );
}

const App=() =>{ 
    let Name="Mj_Islam_Mir";
    //let Age=28;
    return (
        <>
            <Header/>
            {/* Creating a simple paragraph */}
            <p>Hello from the other Side</p>
            {/* getting the data using props from the Heading Component */}
            <Content name="Mujahi_dul_Islam" age="28"/>
            {/* getting the data  from the JS and using it in the Heading Component */} 
            <Content name={Name} age={14+14}/> 
            <Footer/>
            </>
    );
}

export default App;
