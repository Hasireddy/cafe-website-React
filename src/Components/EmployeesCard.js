import React from 'react'

const EmployeesCard = ({ person }) => {
    return (
        <div className={`d-flex m-3 wrap`}>
            <div className={`card`} style={
                {
                    width: '18rem',
                    backgroundColor: '#f9f9f9',
                    boxShadow: '0 0 10px #ddd'
                }
            }>
                <div className={`cardHeader`}>
                    {/* <p>{people}</p> */}
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
                        <h4>Details:</h4>
                        <p>Hi, my name is {person.name.first} and I am {person.dob.age} years old.</p>
                        <p></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EmployeesCard