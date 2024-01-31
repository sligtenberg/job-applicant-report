import Cell from "./Cell"

function Header() {
    // table headers

    // column titles
    const text = [
        "Job",
        "Applicant Name",
        "Email Address",
        "Website",
        "Skills",
        "Cover Letter"
    ]

    const headers = text.map(title => <Cell key={title} cellData={title} header={true} />)

    return (
        <thead>
            <tr>
                {headers}
            </tr>
        </thead>
    );
}

export default Header;
