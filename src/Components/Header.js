import FontStyle from "./FontStyle";

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

    const headers = titles.map(title => <th key={title}><FontStyle text={title} /></th>)

    return (
        <thead>
            <tr>
                {headers}
            </tr>
        </thead>
    );
}

export default Header;
