import React from 'react'

const EmployeesCard = ({ person, role }) => {
    return (
        <div className={`d-flex m-3 wrap`}>
            <div className={`card bg-light shadow rounded-3`} style=
                {
                    {
                        width: '18rem',
                        overflow: 'hidden'
                    }
                }
            >
                <div className={`cardHeader`}>
                    <img 
                        src={`${person.picture.large}`}
                        alt={`${person.name.first} ${person.name.last}`}
                        style={
                            {
                                width: '100%',
                                height: 'auto'
                            }
                        }
                    />
                </div>
                <div className={`cardBody`}>
                    <div className='container'>
                        <h4 className='mt-2'>{role.roleName}</h4>
                        <p>Hi, my name is {person.name.first} and I am {person.dob.age} years old.</p>
                        <p></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EmployeesCard