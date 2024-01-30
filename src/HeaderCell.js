function HeaderCell({ cellData }) {
    return (
        <th>
            <font style={{verticalAlign: "inherit"}}>
                <font style={{verticalAlign: "inherit"}}>
                    {cellData}
                </font>
            </font>
        </th>
    );
}

export default HeaderCell;
