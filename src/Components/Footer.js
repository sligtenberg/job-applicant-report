function Footer({ numApplicants, numUniqSkills }) {
    return (
        <tfoot>
            <tr>
                <td colSpan="6">{numApplicants} Applicants, {numUniqSkills} Unique Skills</td>
            </tr>
        </tfoot>
    );
}

export default Footer;
