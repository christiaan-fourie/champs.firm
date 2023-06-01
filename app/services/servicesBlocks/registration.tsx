
import { FaHandsHelping } from 'react-icons/fa'

export default function Registration() {
  return (
    <div className='my-12 py-12'>
            <div className='flex w-full items-center justify-center'>
                <div className='hidden md:flex justify-center p-2 w-1/3'>
                    <FaHandsHelping size={'50%'} className='' />
                </div>
                <div className='text-left w-1/2'>
                    <div className='flex flex-col justify-start'>
                        <FaHandsHelping size={'30%'} className='md:hidden p-4' />
                        <h1 className='text-xl text-left lg:text-4xl'>Registration and Compliance</h1>
                    </div>                    
                    <div className='w-1/6 h-[1px] bg-gradient-to-l from-[#84be1f] to-[#1b6ec5] from-30% to-70% my-4'></div>
                    <p>Streamline your registration and compliance process with our comprehensive platform, ensuring legal adherence and efficient management of documents and deadlines.</p>
                </div>
            </div>
            <div className='pt-12'>
                {/* Table with registrations and compliance services */}
                <table className='min-w-[70%] mx-auto table-auto text-center bg-[#141b08]'>
                    {/* <thead>
                        <tr className='table-row'>
                            <th className='table-cell'>Registration & Compliance</th>
                            <th className='table-cell'>Compliance</th>
                        </tr>
                    </thead> */}
                    <tbody>
                        <tr className='table-row'>
                            <td className='table-cell w-1/2'>Company Registration</td>
                            <td className='table-cell'>Annual Returns</td>
                        </tr>
                        <tr className='table-row'>
                            <td className='table-cell'>Non-Profit Company Registration</td>
                            <td className='table-cell'>Financial Statements</td>
                        </tr>
                        <tr className='table-row'>
                            <td className='table-cell'>Trust Registration</td>
                            <td className='table-cell'>Income Tax Returns</td>
                        </tr>
                        <tr className='table-row'>
                            <td className='table-cell'>Cooperative Registration</td>
                            <td className='table-cell'>BBBEE Affidavits</td>
                        </tr>
                        <tr className='table-row'>
                            <td className='table-cell'>Business Name Registration</td>
                            <td className='table-cell'></td>
                        </tr>
                    </tbody>

                </table>
            </div>
        </div>
  )
}
