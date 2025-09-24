import React from "react"
import MarketingApp from "./components/MarketingApp"
import Header from "./components/Header"
import { BrowserRouter } from 'react-router-dom'
import { StylesProvider, createGenerateClassName } from "@material-ui/core/styles";


const createGenerateClassNameForCo = createGenerateClassName({
    productionPrefix: 'co'
});


export default () => {
    return (
        <BrowserRouter>
            <StylesProvider createGenerateClassName={createGenerateClassNameForCo}>
                <div>
                    <Header />
                    <MarketingApp />
                </div>
            </StylesProvider>
        </BrowserRouter>


    )
}