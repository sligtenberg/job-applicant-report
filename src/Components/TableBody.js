import JobType from "./JobType";

function TableBody({ jobs }) {
    return (
        <tbody>
            {jobs.map(nestedJob => <JobType key={nestedJob.id} job={nestedJob} />)}
        </tbody>
    );
}

export default TableBody;
