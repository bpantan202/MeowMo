import Link from 'next/link'

export default function TopMeunItem ({title, pageRef} : {title:String, pageRef:String}) {
    return (
        <Link href={pageRef} style={{margin:"20px", color:"#4D869C", fontFamily:"Copperplate, Papyrus, fantasy", fontSize:"20px"}}>
            {title}
        </Link>
    )
}