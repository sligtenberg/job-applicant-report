import FontStyle from "./FontStyle";

function Skill({ jobName, skillName, applicant, numSkills, numJobRows }) {
    // Construct each table row.
    //console.log(jobName)
    
    return (
        <tr>
            {jobName ? <td rowSpan={numJobRows} className={"job-name"}><FontStyle text={jobName}/></td> : null }
            {applicant ? <td rowSpan={numSkills} className={"applicant-name"}><FontStyle text={applicant.name}/></td> : null}
            {applicant ? <td rowSpan={numSkills}>{applicant.email ? <a href={`mailto:${applicant.email}`}><FontStyle text={applicant.email}/></a> : <FontStyle text={'---'}/>}</td> : null}
            {applicant ? <td rowSpan={numSkills}>{applicant.website ? <a href={applicant.website}><FontStyle text={applicant.website}/></a> : <FontStyle text={'---'}/>}</td> : null}
            <td><FontStyle text={skillName} /></td>
            {applicant ? <td rowSpan={numSkills}><FontStyle text={applicant.cover_letter} /></td> : null}
        </tr>
    );
}

export default Skill;
