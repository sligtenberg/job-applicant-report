import Applicant from "./Applicant";

function JobType({ job, applicants, skills }) {

    // /* PARALLEL DATA */
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
    // the first applicantComponent is special because it needs to include information about the job
    const applicantComponents = [
        <Applicant 
            key={job.applicants[0].id}
            applicant={job.applicants[0]}
            job={job}
            numJobRows={job.applicants.reduce((acc, applicant) => acc + applicant.skills.length, 0)}
        />
    ]

    // subsequent applicantComponents only need applicant information
    for (let i = 1; i < job.applicants.length; i++) {
        applicantComponents.push(
            <Applicant
                key={job.applicants[i].id}
                applicant={job.applicants[i]}
            />
        )
    }

    return (
        applicantComponents
    );
}

export default JobType;
