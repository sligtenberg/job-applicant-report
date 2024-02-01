import { useEffect, useState } from "react";
import JobType from "./JobType";

function Body() {
    // table body

    /* **************************************************
    This component makes three separate fetch requests, receiving parallel data.
    It would be better to take advantage of the relational nature of the database,
    only make one fetch request, and receive nested data. This would require a
    heavier backend, but would be more elegant.

    Future plan:
    Build a more robust backend that can serve the data in a single relational object.
    Make one fetch request, receive the data as a pre-nested object,
    omit nesting the data on the frontend.
    ************************************************** */

    // parallel data held in state
    const [jobs, setJobs] = useState([])
    const [applicants, setApplicants] = useState([])
    const [skills, setSkills] = useState([])

    // fetch data directly from json file
    useEffect(() => {
        // job types
        fetch('/jobs').then(rspns => {
            if (rspns.ok) rspns.json().then(setJobs)
            else console.log(rspns) // dev only
        })

        // applicants
        fetch('/applicants').then(rspns => {
            if (rspns.ok) rspns.json().then(setApplicants)
            else console.log(rspns) // dev only
        })

        // skills
        fetch('/skills').then(rspns => {
            if (rspns.ok) rspns.json().then(setSkills)
            else console.log(rspns) // dev only
        })
    }, [])

    // /* PARALLEL DATA */
    // jobComponents is an array of <JobType /> components
    // const jobComponents = [
    //     <JobType
    //         key={jobs[0]?.id}
    //         job={jobs[0]}
    //         applicants={applicants.filter(applicant => applicant.job_id === parseInt(jobs[0].id))}
    //         skills={skills}
    //     />
    // ]

    // for (let i = 1; i < jobs.length; i++) {
    //     jobComponents.push(
    //         <JobType
    //             key={jobs[i]?.id}
    //             job={jobs[i]}
    //             applicants={applicants.filter(applicant => applicant.job_id === parseInt(jobs[i].id))}
    //             skills={skills}
    //         />
    //     )
    // }

    /* NESTED DATA */
    // nestedJobApplicantData is an array of <JobType /> components.
    // each <JobType /> component gets passed a job prop which is a
    // nested object constructed from the flat json data held in state.

    // Future plan:
    // nestedJobApplicantData should probably be done on the backend and served as an object
    const nestedJobApplicantData = jobs.map(job => {
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
            {/* {jobComponents} */}
            {nestedJobApplicantData}
        </tbody>
    );
}

export default Body;
