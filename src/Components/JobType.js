function JobType({ job }) {
    console.log(job)

    const rows = [
        <tr>
            <td key={job.id}>{job.name}</td>
            <td></td>
        </tr>
    ]

    return (
        rows
    );
}

export default JobType;
