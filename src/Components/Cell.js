function Cell({ cellData, header }) {
    // style cells

    const data = 
        <font style={{verticalAlign: "inherit"}}>
            <font style={{verticalAlign: "inherit"}}>
                {cellData}
            </font>
        </font>

    const cell = header ? <th>{data}</th> : <td>{data}</td>

    return cell;
}

export default Cell;
