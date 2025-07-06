import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {I18nextProvider} from "react-i18next";
import i18n from "./i18n.ts";
import HomePage from "./pages/HomePage.tsx";
import ExperienceDetail from "./sections/experience/ExperienceDetail.tsx";

function App() {

    return (
        <>
            <I18nextProvider i18n={i18n}>
                <Router>
                    <Routes>
                        <Route path="/" element={<HomePage/>}/>
                        <Route path="/experience/:id" element={<ExperienceDetail/>}/>
                    </Routes>
                </Router>
            </I18nextProvider>
        </>
    )
}

export default App
