import Cell from "./Cell";

function Skill({ job, skill, applicant, numSkills, numJobRows }) {
    
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
        <tr>
            {job ? <Cell text={job.name} rowSpan={numJobRows} className={"job-name"} /> : null }
            {applicant ? <Cell text={applicant?.name} rowSpan={numSkills} className={"applicant-name"}/> : null}
            {applicant ? <Cell text={applicant?.email} rowSpan={numSkills}/> : null}
            {applicant ? <Cell text={applicant?.website} rowSpan={numSkills}/> : null}
            <Cell text={skill?.name} />
            {applicant ? <Cell text={applicant?.cover_letter} rowSpan={numSkills}/> : null}
        </tr>
    );
}

export default Skill;
