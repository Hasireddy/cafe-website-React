import axios from 'axios'
import React, { useEffect, useState } from 'react'
import EmployeesCard from './EmployeesCard';

const Employees = () => {
    const [people, setPeople] = useState();
    const [roles, setRoles] = useState();
    // .get('/TempEmployees.json')

    useEffect(() => {
        axios
        .get(process.env.REACT_APP_RUAPI)
            .then(res => {
                setPeople(res.data.results);
            })
            .catch(err => console.log(`Oops, something went wrong see the Error ${err}`));
        axios
            .get('/Roles.json')
            .then(res => {
                console.log(res.data.result);
                setRoles(res.data.results);
            })
            .catch(err => console.log(`Oops, something went wrong see the Error ${err}`));
    }, []);

    return (
        <>
            <h2 className='text-center mt-3'>Our Staff</h2>
            <h3 className='text-center'>to ensure your pleasant stay</h3>
            <div className='d-flex justify-content-center flex-wrap'>
                {
                    (people && roles) ? (
                        people.map((person, index) => {
                            const role = roles.find(role => role.personId === index);
                            console.log(role);
                            return <EmployeesCard
                                key={index}
                                person={person}
                                role={role}
                            />
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