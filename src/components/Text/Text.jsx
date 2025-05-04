import React from 'react'

export default function Text() {
    return (
        <>
            <section className="bg-back-ground text-center lg:text-left lg:mb-15 py-20  text-white px-6 md:px-20 lg:py-32 font-normal font-azonix">
                <div className=" lg:space-y-4 text-3xl pl-8 leading-relaxed ">
                    <p className='text-2xl lg:text-6xl'>
                        GREAT BUSINESSES{' '}
                    </p>
                    <span className="text-transparent text-2xl font-normal bg-clip-text bg-gradient-to-r from-orange-500 to-orange-300 lg:text-6xl">DON'T</span>{' '}
                    <span className="text-transparent text-3xl font-normal bg-clip-text bg-text-color lg:text-6xl">FAIL</span>
                    <p className='text-2xl lg:text-6xl'>BAD SOFTWARE DOES.</p>
                </div>
            </section>
        </>
    )
}
