import ToolBar from "../components/ToolBar"
import Footer from "../components/Footer"
import Policies from "../components/Policies"


export default function Contactpage({cart, emptyCart}){



    try{
        return(
            <div>
                  <ToolBar cart={cart} emptyCart={emptyCart}/>
                  <Policies></Policies>
                  <Footer></Footer>
            </div>
        )
    }
    catch(error){
        console.error("Oh no Error", error)
    }
}