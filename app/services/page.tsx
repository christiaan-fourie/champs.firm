import React from 'react'

import Registration from './servicesBlocks/registration'
import Accounting from './servicesBlocks/accounting'
import Branding from './servicesBlocks/branding'


const services = [
    {
        title: 'Registration and Compliance',
        items: [
            'Company Registration (LTD and Non-Profit)',
            'Annual Returns',
            'BEE Certificate',
            'Share Certificate and Shareholders Agreement',
            'Director Amendment and Shareholder Transfer',
            'CSD Registration',
            'CIBD Registration',
            'NHBRC Registration',
            'PSIRA Registration',
            'COIDA Registration',
            'Restoration/Reinstatement of De-Registered Entity',
        ]
    },
    {
        title: 'Accounting and Tax',
        items: [
            'Business Accounts',
            'Company SARS Returns',
            'Personal Income Tax and Returns',
            'Tax Clearance',
            'VAT Returns',
            'Payroll',
            'Bookkeeping',
            'IRPS',
            'Management Report',
            'Cash Flow Management',
            'Annual Financial Statement',
        ]
    },
    {
        title: 'Branding and Design',
        items: [
            'Web Development [Custom Website Design, etc.]',
            'Logo Design',
            'Quotation Design',
            'Poster & Flyer Design',
            'Letterhead Design',
            'Invoice Design',
            'Email Signature Design',
            'Company Profile Design',
            'Presentation Design',
            'Business Card Design',
        ]
    },
    {
        title: 'Customs and Freight',
        items: [
            'Customs Registration [imports and exports]',
            'Exports Goods and Services Tax Recovery',
            'ITAC Permit Application',
            'Manage Customs Reconciliations and Submission Services',
            'Mitigation, Appeals and Disputes of Custom Services',
            'Post Declaration Services',
            'Trade Registration Export Using Certificate of Origin',
            'Filing Declaration [Imports and Exports]',
        ]
    }

]

const learn = [
    {
        title: 'Tutoring and Education',
        items: [
            'Financial Accounting',
            'Taxation I, II and III',
            'Business Accounting',
            'Business Economics',
            'Pure Maths / Maths Literacy',
        ]
    },
    {
        title: 'Tutoring Options/Types',
        items: [
            'Face-to-Face Tutoring',
            'One-on-One Appointment',
            'Corporate/Post Graduate Studies Tutoring',
            'Online Tutoring',
            'Group Tutoring',
            'Study Skills 1st Year Course',
            'Academic Coaching/Mentoring',
        ]
    },
    {
        title: 'Training and Development',
        items: [
            'Facilitating Memorable Learning',
            'Conducting Effective Performance Assessment',
            'Evaluation Techniques on Performance Assessment',
            'Performance Improvement',
            'Impact Through Coaching, Mentoring and Guidance',
            'Mentoring for Career Progression',
            'Ethics in the Workplace',
            'Conflict Management',
            'Identifying and Dealing with Harassment and Bullying',
            'Managing Personal Finance',
            'Understanding Tax Implications on Businesses',
        ]
    }
]

function servicesPage() {
  return (
    <div className='w-full min-h-[60vh] '>
        <main className='text-xl text-center mx-24'>
            <h1 className='md:text-6xl font-extrabold pt-32 text-center bg-clip-text text-transparent bg-gradient-to-l from-[#84be1f] to-[#1b6ec5] from-30% to-70%'>
                Our Services.
            </h1>
            <div className='w-1/6 h-[1px] bg-gradient-to-l from-[#84be1f] to-[#1b6ec5] from-30% to-70% my-4 mx-auto'></div>
            <p className="max-w- mx-auto">
                We are here to build creative brands, and companies that meets world class client/customer satisfaction.
            </p>
            {/* <div className='flex flex-wrap justify-center py-12 gap-4'>
                {services.map((service, index) => (
                    <div key={index} className="w-1/3 hover:w-1/2 border p-12 transition-all duration-500 rounded-lg hover:border-[#84bd1f] hover:text-[#84be1f]">
                        <h2 className="text-4xl font-thin pb-6">{service.title}</h2>
                        <ul>
                            {service.items.map((item, index) => (
                                <li key={index+10} className=''>{item}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
            <h2 className="text-4xl font-thin pb-6">Tutoring and Education</h2>
            <div className='flex flex-col gap-4'>
                {learn.map((service, index) => (
                    <div key={index} className="w-2/3 mx-auto border p-12 transition-all duration-500 rounded-lg hover:border-[#84bd1f] hover:text-[#84be1f]">
                        <h2 className="text-4xl font-thin pb-6">{service.title}</h2>
                        <ul>
                            {service.items.map((item, index) => (
                                <li key={index+10}>{item}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
            
            <p><strong>Consulting and Advisory</strong></p>
            <ul>
            <li>Corporate Governance Consulting</li>
            <li>Business Plan Development</li>
            <li>Sales and Marketing</li>
            <li>Business Model Design</li>
            <li>Business Expansion Plan</li>
            <li>Value Proposition and Strategy</li>
            <li>Productivity Improvement Plan</li>
            <li>Business Turnaround Plan</li>
            <li>Marketing Plan and Strategy</li>
            </ul>
            <p><strong>Events and Exhibitions</strong></p>
            <ul>
            <li>Consultation Meetings</li>
            <li>Networking Session Events</li>
            <li>Shopping Malls/Center/Complex Exhibitions</li>
            <li>Board Meeting Organizing and Hosting</li>
            <li>Presentations and Conferencing</li>
            <li>Webinars, Seminars and Workshops</li>
            <li>Team Building Sessions</li>
            </ul>
            <p><strong>Coaching and Mentoring</strong></p>
            <ul>
            <li>Executive Coaching and Mentoring</li>
            <li>Performance Coaching and Mentoring</li>
            <li>Financial Coaching and Mentoring</li>
            <li>Management Coaching and Mentoring</li>
            <li>Personal Skills Coaching and Mentoring</li>
            <li>Leadership Coaching and Mentoring</li>
            <li>Business Coaching and Mentoring</li>
            <li>Startup Coaching and Mentoring</li>
            <li>Skills Coaching and Mentoring</li>
            <li>Supervisory Coaching and Mentoring</li>
            </ul>
            <p><strong>Human Resources and Legal</strong></p>
            <ul>
            <li>Staff Administration</li>
            <li>Talent and Performance Management</li>
            <li>Training and Empowerment</li>
            <li>Employment Equity</li>
            <li>Skills and Leadership Development</li>
            <li>Recruitment Policies</li>
            <li>HR Compliance</li>
            </ul>
            <p><strong>Sales and Marketing</strong></p>
            <ul>
            <li>Marketing Plan</li>
            <li>Marketing Strategy</li>
            <li>Business Growth Plan</li>
            <li>Business Proposal</li>
            <li>Tender Bid Documents</li>
            <li>Sales Presentation</li>
            <li>Social Media Advertising</li>
            <li>Business Proposal</li>
            </ul> */}

            

        </main>
        

        <Registration />

        <Accounting />

        <Branding />


    </div>
  )
}

export default servicesPage
