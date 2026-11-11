import { ListItems } from './ListItems'

export const Accordian = ({title,open,setOpen,}: {title: string; open: boolean ;setOpen: () => void}) => {
  const showItemList = () => {
    setOpen()
  }
  return (
    <div className='mt-5 shadow-md border border-gray-200 p-4'>
        <div className='flex justify-between w-55'>
          <h1>{title}</h1>
          <button onClick={showItemList} className='bg-black text-white px-2 rounded-md'>Show</button>
        </div>
        {
          open && <ListItems/>
        }
    </div>
  )
}
