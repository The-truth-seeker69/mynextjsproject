import { roboto, oswald, merriweather } from './font';
import { Button } from './button';
import Image from 'next/image'
export default function loginForm() {
    return (
        <main className='flex h-screen justify-center items-center bg-gray-100 '>
            <div id="container" className="flex bg-white w-1/2 h-96 rounded-lg shadow-lg rounded-xl">
                <div id="login-image-display" className="mr-5 ml-[-20px]  w-1/2 flex rounded-xl" >
                    <Image src="/images/tamako.jpg" alt='nigga' width={400} height={500} className="object-cover h-full w-100" />
                </div>
                <form action={""} className='flex items-center justify-center flex-col w-1/2'>
                    <h1 className={` ${merriweather.className} text-3xl font-bold`}>Login</h1>

                    <div >
                        <div>
                            <label className={`${merriweather.className} text-l mb-1`}>Email : </label>
                            <input className={`${merriweather.className}  border-solid border-2 border-gray-300 mt-1 h-8 p-2 w-full outline-none textbase`} id='email' type='email' name="email"></input>
                        </div>
                        <div>
                            <label className={`${merriweather.className} text-l`}>Password : </label>
                            <input className={`${merriweather.className}  border-solid border-2 border-gray-300 mt-1 h-8 p-2 w-full outline-none text-base`} id='password' type='password' name="password"></input>
                        </div>
                    </div>
                    <Button className='mt-4'>
                        <p className={`${merriweather.className}`}> Login</p>
                    </Button>

                </form>
            </div>
        </main>


    )


}