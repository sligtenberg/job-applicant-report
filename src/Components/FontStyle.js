function FontStyle({ text }) {
    // This component  adds the inline font styling found in the example html file.
    // To stop using this component: replace it's appearance with the value of what is passed in as the text prop.
    return (
        <font style={{verticalAlign: "inherit"}}>
            <font style={{verticalAlign: "inherit"}}>
                {text}
            </font>
        </font>
    );
}

export default FontStyle;
