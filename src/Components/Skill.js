import FontStyle from "./FontStyle";

function Skill({ jobName, skillName, applicant, numSkills, numJobRows }) {
    // deal with blank information like no website

    // Construct each table row.
    
    return (
        <tr>
            {jobName ? <td rowSpan={numJobRows} className={"job-name"}><FontStyle text={jobName}/></td> : null }
            {applicant ? <td rowSpan={numSkills} className={"applicant-name"}><FontStyle text={applicant.name}/></td> : null}
            {applicant ? <td rowSpan={numSkills}><a href={`mailto:${applicant.email}`}><FontStyle text={applicant.email}/></a></td> : null}
            {applicant ? <td rowSpan={numSkills}>{applicant.website ? <a href={applicant.website}><FontStyle text={applicant.website}/></a> : <FontStyle text={'---'}/>}</td> : null}
            <td><FontStyle text={skillName} /></td>
            {applicant ? <td rowSpan={numSkills}><FontStyle text={applicant.cover_letter} /></td> : null}
        </tr>
    );
}

export default Skill;
