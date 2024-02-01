function TableCall({ contents, header, rowSpan, className }) {
    return (
        header ?
            <th>{contents}</th> : 
            <td rowSpan={rowSpan} className={className}>{contents}</td>
    );
}

export default TableCall;
