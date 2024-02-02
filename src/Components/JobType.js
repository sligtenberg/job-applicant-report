import Applicant from "./Applicant";
import FontStyle from "./FontStyle";

function JobType({ job }) {
    // Map each applicant to an applicantComponent.
    // Each applicantComponent eventually becomes a set of rows - one row for each of the applicant's skills.
    // The first applicantComponent must also contain the job name.
    // Subsequent applicantComponents contain only the applicant.
    // numJobRows is the number of rows needed for the job.
    // To preserve the row, numJobRows has a min value of 1, in the case of no applicants.

    // (job.applicant.length === 0) indicates there are no applicants for the job.
    // In this case, we render an empty row

    const applicantComponents = job.applicants.map((applicant, index) =>
            <Applicant
                key={applicant.id}
                jobName={index === 0 ? job.name : null}
                applicant={applicant}
                numJobRows={job.applicants.reduce((acc, applicant) => acc + Math.max(applicant.skills.length, 1), 0)}
            />
        )

    return (
        applicantComponents.length > 0 ? applicantComponents : <tr><td><FontStyle text={job.name}/></td><td><FontStyle text={"No Applicants"}/></td></tr>
    );
}

export default JobType;
