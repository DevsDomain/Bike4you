import { useState } from "react";
import Cadastro from "../Cadastro";
import { Container } from "./style";
import Tab1 from "./Tab1";
import Tab3 from "./Tab3";


export default function Tabs(){


    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    }




    return(
        <Container>
            <div className="tabs">
                <div className={toggleState === 1 ? "active" : "tab" } onClick={()=>toggleTab(1)}> Usuario</div>
                <div className={toggleState === 2 ? "active" : "tab" } onClick={()=>toggleTab(2)}> Bike </div>
                <div className={toggleState === 3 ? "active" : "tab" } onClick={()=>toggleTab(3)}> Geral</div>
            </div>

            <div>
                <div>
                    <Tab1 />
                </div>
                <div>
                    <Cadastro />
                </div>
                <div>
                    <Tab3 />
                </div>
            </div>

        </Container>
    )
}