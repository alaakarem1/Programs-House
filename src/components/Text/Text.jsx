import React from 'react'

export default function Text() {
    return (
        <>
            <section className="bg-back-ground  text-white px-6 md:px-20 py-32 font-normal font-azonix">
                <div className=" space-y-4 text-3xl pl-8 leading-relaxed ">
                    <p className='text-6xl '>
                        GREAT BUSINESSES{' '}
                    </p>
                    <span className="text-transparent text-6xl font-normal bg-clip-text bg-gradient-to-r from-orange-500 to-orange-300">DON'T</span>{' '}
                    <span className="text-transparent text-6xl font-normal bg-clip-text bg-text-color">FAIL</span>
                    <p className='text-6xl'>BAD SOFTWARE DOES.</p>
                </div>
            </section>
        </>
    )
}
