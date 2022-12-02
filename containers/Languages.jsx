import Image from 'next/image'

import { figma, git, javascript, next, react, tailwind } from '../imports/langs/langs'


export default function Langs() {
    return(
        <div className="plnt__langs section__padding">
            <div>
            <Image src={figma} width={65} height={65}/>
            </div>
            <div>
            <Image src={git} width={65} height={65}/>
            </div>
            <div>
            <Image src={javascript} width={65} height={65}/>
            </div>
            <div>
            <Image src={next} width={65} height={65}/>
            </div>
            <div>
            <Image src={react} width={65} height={65}/>
            </div>
            <div>
            <Image src={tailwind} width={65} height={65}/>
            </div>
        </div>
    )
}