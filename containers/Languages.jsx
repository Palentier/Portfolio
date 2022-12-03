import Image from 'next/image'



export default function Langs() {
    return(
        <div className="plnt__langs section__padding">
            <div className='plnt__langs-effect'>
            <Image src='/icons8-figma-100.png' width={65} height={65}/>
            </div>
            <div className='plnt__langs-effect'>
            <Image src='/icons8-git-100.png' width={65} height={65}/>
            </div>
            <div className='plnt__langs-effect'>
            <Image src='/icons8-javascript-100.png' width={65} height={65}/>
            </div>
            <div className='plnt__langs-effect'>
            <Image src='/icons8-mongodb-100.png' width={65} height={65}/>
            </div>
            <div className='plnt__langs-effect'>
            <Image src='/icons8-tailwindcss-100.png' width={65} height={65}/>
            </div>
            <div className='plnt__langs-effect'>
            <Image src='/icons8-react-100.png' width={65} height={65}/>
            </div>
        </div>
    )
}