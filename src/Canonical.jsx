import { useEffect } from "react";

function Canonical({ url }) {
    useEffect(() => {
        let linkCanonical = document.querySelector("link[rel='canonical']");
        if (linkCanonical) {
            linkCanonical.setAttribute("href", url);
        } else {
            const newLink = document.createElement("link");
            newLink.rel = "canonical";
            newLink.href = url;
            document.head.appendChild(newLink);
        }
    }, [url]);

    return null;
}

export default Canonical;