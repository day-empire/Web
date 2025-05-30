import { useEffect } from "react";

function MetaUpdater({ title, description }) {
    useEffect(() => {
        document.title = title;
        let metaDescription = document.querySelector("meta[name='description']");
        if (metaDescription) {
            metaDescription.setAttribute("content", description);
        } else {
            const newMeta = document.createElement("meta");
            newMeta.name = "description";
            newMeta.content = description;
            document.head.appendChild(newMeta);
        }
    }, [title, description]);

    return null;
}

export default MetaUpdater;