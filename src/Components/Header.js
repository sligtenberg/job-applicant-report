import TableCellInLineStyle from "./TableCellInlineStyle";
import Cell from "./TableCellInlineStyle"

function Header() {
    // table headers

    // column titles
    const titles = [
        "Job",
        "Applicant Name",
        "Email Address",
        "Website",
        "Skills",
        "Cover Letter"
    ]

    const headers = titles.map(title => <th key={title}><TableCellInLineStyle text={title} /></th>)

    return (
        <thead>
            <tr>
                {headers}
            </tr>
        </thead>
    );
}

export default Header;
