import Skill from "./Skill";

function Applicant({ job, applicant, skills, numJobRows }) {

    // /* PARALLEL DATA */
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
    // the first skillComponent is special because it needs to include information about the applicant
    const skillComponents = [
        <Skill
            key={applicant.skills[0].id}
            skill={applicant.skills[0]}
            applicant={applicant}
            job={job}
            numSkills={applicant.skills.length}
            numJobRows={numJobRows}
        />
    ]

    for (let i = 1; i < applicant.skills.length; i++) {
        skillComponents.push(
            <Skill
                key={applicant.skills[i].id}
                skill={applicant.skills[i]}
            />
        )
    }


    return (
        skillComponents
    );
}

export default Applicant;
