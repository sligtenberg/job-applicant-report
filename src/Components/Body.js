import { useEffect, useState } from "react";
import JobType from "./JobType";

function Body() {
    // table body

    /* **************************************************
    This component makes three separate fetch requests, receives flat data, 
    then nests the data manually in an object. It would be better to take
    advantage of the relational nature of the database, only make one
    fetch request, and receive nested data. This would require more work
    on the backend, less work for the frontend, and would be more elegant.

    At this time, I do not know how to fetch json data as one nested object.
    ************************************************** */

    // flat data held in state
    const [jobs, setJobs] = useState([])
    const [applicants, setApplicants] = useState([])
    const [skills, setSkills] = useState([])

    // fetch data directly from json file
    useEffect(() => {
        // job types
        fetch('http://localhost:3000/jobs').then(rspns => {
            if (rspns.ok) rspns.json().then(setJobs)
            else console.log(rspns) // dev only
        })

        // applicants
        fetch('http://localhost:3000/applicants').then(rspns => {
            if (rspns.ok) rspns.json().then(setApplicants)
            else console.log(rspns) // dev only
        })

        // skills
        fetch('http://localhost:3000/skills').then(rspns => {
            if (rspns.ok) rspns.json().then(setSkills)
            else console.log(rspns) // dev only
        })
    }, [])

    // nestedJobs is an array of JobType components.
    // each JobType component gets passed a jobType prop which is a
    // nested object constructed from the flat json data held in state.
    // this type of construction should probably be handled by the backend
    const nestedJobs = jobs.map(job => {
        return {
            ...job,
            applicants: applicants.filter(applicant => applicant.job_id === parseInt(job.id)).map(applicant => {
                return {
                    ...applicant,
                    skills: skills.filter(skill => skill.applicant_id === parseInt(applicant.id))}
            })
        }
    }).map(nestedJob => <JobType key={nestedJob.id} job={nestedJob} />)

    return (
        <tbody>
            {/* {nestedJobs} */}
        </tbody>
    );
}

export default Body;
