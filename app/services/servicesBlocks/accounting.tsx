
import { FaBalanceScale } from 'react-icons/fa'

export default function Accounting() {
  return (
    <div className='my-12 py-12'>
            <div className='flex w-full items-center justify-center'>
                <div className='hidden md:flex justify-center p-2 w-1/3'>
                    <FaBalanceScale size={'50%'} className='' />
                </div>
                <div className='text-left w-1/2'>
                    <div className='flex flex-col justify-start'>
                        <FaBalanceScale size={'30%'} className='md:hidden p-4' />
                        <h1 className='text-xl text-left lg:text-4xl'>Accounting and Tax</h1>
                    </div>                    
                    <div className='w-1/6 h-[1px] bg-gradient-to-l from-[#84be1f] to-[#1b6ec5] from-30% to-70% my-4'></div>
                    <p>Our firm offers comprehensive accounting solutions, including precise financial record-keeping, analysis, and interpretation, along with expert tax planning and compliance services to ensure your financial matters are handled efficiently and in compliance with relevant regulations.</p>
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
                            <td className='table-cell w-1/2'>Business Accounts</td>
                            <td className='table-cell'>Company SARS Returns</td>
                        </tr>
                        <tr className='table-row'>
                            <td className='table-cell'>Personal Income Tax and Returns</td>
                            <td className='table-cell'>Tax Clearance</td>
                        </tr>
                        <tr className='table-row'>
                            <td className='table-cell'>VAT Returns</td>
                            <td className='table-cell'>Payroll</td>
                        </tr>
                        <tr className='table-row'>
                            <td className='table-cell'>Bookkeeping</td>
                            <td className='table-cell'>IRPS</td>
                        </tr>
                        <tr className='table-row'>
                            <td className='table-cell'>Management Report</td>
                            <td className='table-cell'>Cash Flow Management</td>
                        </tr>
                        <tr className='table-row'>
                            <td className='table-cell'>Annual Financial Statement</td>
                            <td className='table-cell'></td>
                        </tr>
                    </tbody>

                </table>
            </div>
        </div>
  )
}
