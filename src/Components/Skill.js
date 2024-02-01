import TableCellInLineStyle from "./TableCellInlineStyle";

function Skill({ jobName, skillName, applicant, numSkills, numJobRows }) {
    // deal with blank information like no website


    // /* PARALLEL DATA */
    // const row = 
    //     <tr>
    //         <Cell text={job?.name} rowSpan={numJobRows} className={"job-name"}/>
    //         <Cell text={applicant?.name} rowSpan={numSkills} className={"applicant-name"}/>
    //         <Cell text={applicant?.email} rowSpan={numSkills}/>
    //         <Cell text={applicant?.website} rowSpan={numSkills}/>
    //         <Cell text={skill?.name} />
    //         <Cell text={applicant?.cover_letter} rowSpan={numSkills}/>
    //     </tr>
    
    return (
        // <tr>
        //     {jobName ? <td rowSpan={numJobRows} className={"job-name"}><TableCellInLineStyle text={jobName}/></td> : null }
        //     {applicant ? <td rowSpan={numSkills} className={"applicant-name"}><TableCellInLineStyle text={applicant.name}/></td> : null}
        //     {applicant ? <td rowSpan={numSkills}><a href={`mailto:${applicant.email}`}><TableCellInLineStyle text={applicant.email}/></a></td> : null}
        //     {applicant ? <td rowSpan={numSkills}><a href={applicant.website}><TableCellInLineStyle text={applicant.website}/></a></td> : null}
        //     <td><TableCellInLineStyle text={skillName} /></td>
        //     {applicant ? <td rowSpan={numSkills}><TableCellInLineStyle text={applicant.cover_letter} /></td> : null}
        // </tr>
        <tr>
        {jobName ? <td rowSpan={numJobRows} className={"job-name"}><TableCellInLineStyle text={jobName}/></td> : null }
        {applicant ? <td rowSpan={numSkills} className={"applicant-name"}><TableCellInLineStyle text={applicant.name}/></td> : null}
        {applicant ? <td rowSpan={numSkills}><a href={`mailto:${applicant.email}`}><TableCellInLineStyle text={applicant.email}/></a></td> : null}
        {applicant ? <td rowSpan={numSkills}><a href={applicant.website}><TableCellInLineStyle text={applicant.website}/></a></td> : null}
        <td><TableCellInLineStyle text={skillName} /></td>
        {applicant ? <td rowSpan={numSkills}><TableCellInLineStyle text={applicant.cover_letter} /></td> : null}
    </tr>

    );
}

export default Skill;
