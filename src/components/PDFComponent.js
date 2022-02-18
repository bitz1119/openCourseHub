import { useState } from "react";
import { Document, Page } from "react-pdf";

function PDFComponent(props) {
    return (
    <embed src={props.url} height="100%" width="100%" type="application/pdf" />
    )
}

export default PDFComponent;