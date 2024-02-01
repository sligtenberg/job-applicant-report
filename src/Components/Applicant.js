import Skill from "./Skill";

function Applicant({ jobName, applicant, numJobRows }) {

    // /* PARALLEL DATA */
    // to use the parallel data approach, add {skills} to prop import
    // // the first skill component also needs the applicant data
    // const skillComponents = [
    //     <Skill
    //         key={skills[0]?.id}
    //         skill={skills[0]}
    //         applicant={applicant}
    //         job={job}
    //         numSkills={skills.length}
    //         numJobRows={numJobRows}
    //     />
    // ]

    // // subsequent skills will have blank cells, so no applicant data passed in
    // for (let i = 1; i < skills.length; i++) {
    //     skillComponents.push(
    //         <Skill
    //             key={skills[i]?.id}
    //             skill={skills[i]}
    //         />
    //     )
    // }

    /* NESTED DATA */

    // each skillComponent eventually corresponds to a row in the table body.
    // the first skill for each applicant also contains the applicant information
    // subsequent skills contain only the skill information

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

    return (
        skillComponents
    );
}

export default Applicant;