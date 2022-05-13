import React from 'react'
import { Link } from 'react-router-dom';

const imgUrl = 'https://animaleadership.com/wp-content/uploads/2020/03/Anima-Cafe.jpg';

const About = () => {
    return (
        <>
            <div className='d-flex align-items-center' style={
                {
                    overflow: 'hidden',
                    position: 'relative',
                    height: '90vh'
                }
            }>
                <img
                    src={imgUrl}
                    alt="cup of cappucino with a heart"
                    style={
                        {
                            opacity: '0.4',
                            position: 'absolute',
                            left: '0',
                            top: '0',
                            width: '100%',
                            aspectRatio: 'initial',
                            height: 'auto'
                        }
                    }
                />
                <div
                    style={
                        {
                            position: 'relative',
                            height: '100vh'
                        }
                    }
                    className='container d-flex justify-content-center align-items-center'
                >
                    <div
                        className='card rounded-3 border shadow'
                        style={
                            {
                                padding: '1rem',
                                height: 'fit-content()'
                            }
                        }
                    >
                        <h2>About us</h2>
                        <p>We're proud to serving our worlds best coffee and cakes since 1920. To keep our café as up to date as possible we change our staff as soon as you refresh the employees page. Try it 
                        <Link to={'/employees'}> here</Link></p>
                    </div>
                </div>
            </div>
        </>

    )
}

export default About