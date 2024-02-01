import Applicant from "./Applicant";

function JobType({ job }) {
    // Map each applicant to an applicantComponent.
    // Each applicantComponent eventually becomes a set of rows - one row for each of the applicant's skills.
    // The first applicantComponent must also contain the job name.
    // Subsequent applicantComponents contain only the applicant.
    // numJobRows is the number of rows needed for the job.

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
