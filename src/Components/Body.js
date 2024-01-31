import { useEffect, useState } from "react";

function Body() {
    // table body

    /* **************************************************
    This component relies on three separate fetch requests to get the data,
    and then nests the data manually. It would be an improvement to take
    advantage of the relational nature of the database and only make one
    fetch request and receive data that is already nested. This would be more
    work for the backend, less work for the frontend and much more elegant.

    At this time, I do not know how to fetch json data as one nested object.
    ************************************************** */

    // job types
    const [jobs, setJobs] = useState([])
    const [applicants, setApplicants] = useState([])
    const [skills, setSkills] = useState([])

    useEffect(() => {
        // fetch job types from server
        fetch('http://localhost:3000/jobs').then(rspns => {
            if (rspns.ok) rspns.json().then(setJobs)
            else console.log("fetch error") // dev only
        })

        // fetch applicants from server
        fetch('http://localhost:3000/applicants').then(rspns => {
            if (rspns.ok) rspns.json().then(setApplicants)
            else console.log("fetch error") // dev only
        })

        // fetch skills from server
        fetch('http://localhost:3000/skills').then(rspns => {
            if (rspns.ok) rspns.json().then(setSkills)
            else console.log("fetch error") // dev only
        })

    }, [])

    // create nested object from json data
    const jobObject = jobs.map(job => {
        return {
            jobName: job.name,
            people: applicants.filter(applicant => applicant.job_id === parseInt(job.id)).map(applicant => {
                return {...applicant, skills: skills.filter(skill => skill.applicant_id === parseInt(applicant.id))}
            })
        }
    })

    return (
        <tbody>
        </tbody>
    );
}

export default Body;
