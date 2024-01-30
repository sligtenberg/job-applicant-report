import HeaderCell from "./HeaderCell"

function Header() {
    // table headers

    return (
        <thead>
            <tr>
                <HeaderCell cellData={"Job"} />
                <HeaderCell cellData={"Applicant Name"} />
                <HeaderCell cellData={"Email Address"} />
                <HeaderCell cellData={"Website"} />
                <HeaderCell cellData={"Skills"} />
                <HeaderCell cellData={"Cover Letter"} />
            </tr>
        </thead>
    );
}

export default Header;
