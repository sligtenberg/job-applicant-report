import Applicant from "./Applicant";

function JobType({ job }) {

    // /* PARALLEL DATA */
    // to use the parallel data approach, add {applicants, skills} to prop import
    // // first applicant component also needs job data
    // const applicantComponents = [
    //     <Applicant
    //         key={applicants[0]?.id}
    //         job={job}
    //         applicant={applicants[0]}
    //         skills={skills.filter(skill => skill.applicant_id === parseInt(applicants[0].id))}
    //     />
    // ]

    // // subsequent applicant components only need the applicant and the skills
    // for (let i = 1; i < applicants.length; i++) {
    //     applicantComponents.push(
    //         <Applicant
    //             key={applicants[i]?.id}
    //             applicant={applicants[i]}
    //             skills={skills.filter(skill => skill.applicant_id === parseInt(applicants[i].id))}
    //         />
    //     )
    // }

    /* NESTED DATA */

    // map each applicant to an applicantComponent.
    // each applicantComponent eventually becomes a set of rows,
    // one row for each of the applicant's skills
    // the first applicantComponent also contains the job information
    // subsequent applicantComponents contain only the applicant information

    const applicantComponents = job.applicants.map((applicant, index) =>
            <Applicant
                key={applicant.id}
                jobName={index === 0 ? job.name : null}
                applicant={applicant}
                numJobRows={job.applicants.reduce((acc, applicant) => acc + applicant.skills.length, 0)}
            />
        )

    return (
        applicantComponents
    );
}

export default JobType;
