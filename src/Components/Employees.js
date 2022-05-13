import axios from 'axios'
import React, { useEffect, useState } from 'react'
import EmployeesCard from './EmployeesCard';

const Employees = () => {
    const [people, setPeople] = useState();

    useEffect(() => {
        axios
            .get('/TempEmployees.json')
            .then(res => {
                // console.log(res.data.results);
                setPeople(res.data.results);
            })
            .catch();
    }, [])

    return (
        <>
            <h2>Our Staff</h2>
            <h3>to ensure your pleasant stay</h3>
            {
                (people) ? (
                    people.map((person, index) => {
                        return <EmployeesCard key={index} person={person} />
                    })
                ) : (
                    'Loading...'
                )
            }
        </>
    )
}

export default Employees;