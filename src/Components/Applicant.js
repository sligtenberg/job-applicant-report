import Skill from "./Skill";

function Applicant({ jobName, applicant, numJobRows }) {
    // Each skillComponent eventually corresponds to a row in the table body.
    // The first skill for each applicant must also contain the applicant information.
    // Subsequent skills contain only the skill information.
    // numSkills is the number of rows needed for the applicant.
    // numJobRows is the number of rows needed for the job.

    const skillComponents = applicant.skills.map((skill, index) =>
            <Skill
                key={skill.id}
                jobName={index === 0 ? jobName : null}
                applicant={index === 0 ? applicant : null}
                skillName={skill.name}
                numSkills={applicant.skills.length}
                numJobRows={numJobRows}
            />
        )
    
    if (applicant.skills.length === 0) {
        skillComponents.push(
            <Skill
                key={applicant.id}
                jobName={jobName}
                applicant={applicant}
                numJobRows={numJobRows}
            />
        )
    }

    return (
        skillComponents
    );
}

export default Applicant;
