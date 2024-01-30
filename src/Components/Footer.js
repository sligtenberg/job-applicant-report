function Footer({ numApplicants = 0, numUniqSkills = 0 }) {
    // table footer
    // displays number of applicants and unique skills, default 0 if nothing is passed in
    return (
        <tfoot>
            <tr>
                <td colspan="6">{numApplicants} Applicants, {numUniqSkills} Unique Skills</td>
            </tr>
        </tfoot>
    );
}

export default Footer;
