import Image from 'next/image'

const ProfileImage = () => {
  return (
    <>
    <div className="relative h-[300px] w-[300px] overflow-hidden object-cover shadow-2xl shadow-orange-400 rounded-full">
      <Image 
        src='https://ik.imagekit.io/0nln4zk3z/aloel-blog/aloel.jpg?updatedAt=1691966182099' 
        alt="My Picture"
        sizes={50} 
        quality={70}
        priority={true}
        fill
      />
    </div>
    </>
  )
}

export default ProfileImage