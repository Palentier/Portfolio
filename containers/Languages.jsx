import Image from 'next/image'

import { figma, git, javascript, mongo, react, tailwind } from '../imports/langs/langs'


export default function Langs() {
    return(
        <div className="plnt__langs section__padding">
            <div className='plnt__langs-effect'>
            <Image src={figma} width={65} height={65}/>
            </div>
            <div className='plnt__langs-effect'>
            <Image src={git} width={65} height={65}/>
            </div>
            <div className='plnt__langs-effect'>
            <Image src={javascript} width={65} height={65}/>
            </div>
            <div className='plnt__langs-effect'>
            <Image src={mongo} width={65} height={65}/>
            </div>
            <div className='plnt__langs-effect'>
            <Image src={react} width={65} height={65}/>
            </div>
            <div className='plnt__langs-effect'>
            <Image src={tailwind} width={65} height={65}/>
            </div>
        </div>
    )
}