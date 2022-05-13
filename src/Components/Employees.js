import axios from 'axios'
import React, { useEffect, useState } from 'react'
import EmployeesCard from './EmployeesCard';

const Employees = () => {
    const [people, setPeople] = useState();

    useEffect(() => {

        // .get(process.env.REACT_APP_RUAPI)
        axios
            .get('/TempEmployees.json')
            .then(res => {
                setPeople(res.data.results);
                console.log(res.data);
            })
            .catch();
    }, [])

    return (
        <>
            <h2 className='text-center mt-3'>Our Staff</h2>
            <h3 className='text-center'>to ensure your pleasant stay</h3>
            <div className='d-flex justify-content-center flex-wrap'>
                {
                    (people) ? (
                        people.map((person, index) => {
                            return <EmployeesCard key={index} person={person} />
                        })
                    ) : (
                        'Loading...'
                    )
                }
            </div>
        </>
    )
}

export default Employees;