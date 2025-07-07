import {useEffect} from "react";
import {useLocation} from "react-router-dom";

declare global {
    interface Window {
        _paq?: Array<any>;
    }
}

const MatomoTracker = () => {
    const location = useLocation();

    useEffect(() => {
        if (window._paq) {
            window._paq.push(["setCustomUrl", window.location.href]);
            window._paq.push(["setDocumentTitle", document.title]);
            window._paq.push(["trackPageView"]);
        }
    }, [location]);

    return null;
};

export default MatomoTracker;