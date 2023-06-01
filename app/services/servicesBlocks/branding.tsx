
import { FaPaintBrush } from 'react-icons/fa'

export default function Branding() {
  return (
    <div className='my-12 py-12'>
            <div className='flex w-full items-center justify-center'>
                <div className='hidden md:flex justify-center p-2 w-1/3'>
                    <FaPaintBrush size={'50%'} className='' />
                </div>
                <div className='text-left w-1/2'>
                    <div className='flex flex-col justify-start'>
                        <FaPaintBrush size={'30%'} className='md:hidden p-4' />
                        <h1 className='text-xl text-left lg:text-4xl'>Branding and Design</h1>
                    </div>                    
                    <div className='w-1/6 h-[1px] bg-gradient-to-l from-[#84be1f] to-[#1b6ec5] from-30% to-70% my-4'></div>
                    <p>Our agency specializes in crafting captivating and cohesive brand identities, combining strategic thinking and creative expertise to communicate your unique story and values through visually stunning designs that leave a lasting impact.</p>
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
                            <td className='table-cell w-1/2'>Web Development</td>
                            <td className='table-cell'>Custom Website Design</td>
                        </tr>
                        <tr className='table-row'>
                            <td className='table-cell'>Logo Design</td>
                            <td className='table-cell'>Quotation Design</td>
                        </tr>
                        <tr className='table-row'>
                            <td className='table-cell'>Poster & Flyer Design</td>
                            <td className='table-cell'>Letterhead Design</td>
                        </tr>
                        <tr className='table-row'>
                            <td className='table-cell'>Invoice Design</td>
                            <td className='table-cell'>Email Signature Design</td>
                        </tr>
                        <tr className='table-row'>
                            <td className='table-cell'>Company Profile Design</td>
                            <td className='table-cell'>Presentation Design</td>
                        </tr>
                        <tr className='table-row'>
                            <td className='table-cell'>Business Card Design</td>
                            <td className='table-cell'></td>
                        </tr>
                    </tbody>

                </table>
            </div>
        </div>
  )
}
