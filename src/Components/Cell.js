function Cell({ text, header=false, rowSpan, className }) {
    // Cell returns a <th> or <td> html element that is styled according to the model

    // table cells

    const cell = 
        <font style={{verticalAlign: "inherit"}}>
            <font style={{verticalAlign: "inherit"}}>
                {text}
            </font>
        </font>

    return (
        header ? <th>{cell}</th> : <td rowSpan={rowSpan} className={className}>{cell}</td>
    );
}

export default Cell;
