//This page is for syncing clerk with our database... So if we are not signed In We'll have to 
//But If we are signed in, which we will be 100% of times, because this route is not public as seen in middleware.ts
//SO what it does, whatever info is saved it saves in our database by our prisma schema
import {prisma} from '@/utils/db'
import { currentUser } from '@clerk/nextjs'
import {redirect} from 'next/navigation'
const createNewUser = async() =>{
  const user = await currentUser()
  const match = await prisma.user.findUnique({
    where: {
        clerkId : user?.id as string,

    },
  })

  if(!match){
    const NewUser = await prisma.user.create({
      data : {
        clerkId:user.id,
        email:user?.emailAddresses[0].emailAddress,
      }
    })
  }

  redirect('/journal')

}



const NewUser = async() => {
  await createNewUser()
  return (
    <div>
      hi
    </div>
  )
}

export default NewUser
