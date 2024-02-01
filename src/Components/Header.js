import Cell from "./Cell"

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

    const headers = titles.map(title => <Cell key={title} text={title} header={true} />)

    return (
        <thead>
            <tr>
                {headers}
            </tr>
        </thead>
    );
}

export default Header;
