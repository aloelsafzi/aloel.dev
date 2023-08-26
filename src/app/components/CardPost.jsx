import {
  Badge
} from "@/app/components"
import DateFormatter from '@/app/lib/dateFormatter'

const CardPost = ({ data }) => {
  return (
    <div className='p-5 border-gray-200 border rounded-3xl cursor-pointer hover:shadow-inner hover:rounded-3xl'>
      <div className='flex justify-between'>
        <h1 className='text-lg'>{data.title}</h1>
        <Badge text={DateFormatter(data.date)} />
      </div>
      <hr className='mb-3 mt-1' />
      <p className='text-sm antialiased font-light tracking-wide leading-relaxed indent-10'>{data.description}</p>
    </div>
  )
}

export default CardPost