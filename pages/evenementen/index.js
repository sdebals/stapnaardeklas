import Layout from '../../components/Layout'
import Link from 'next/link'
import Image from 'next/image';
import { useState, useEffect } from "react";

export const getStaticProps = async () => {
    /** runs at build time */
    const res = await fetch('https://data.stad.gent/api/v2/catalog/datasets/stap-naar-de-klas-gent/records/');
    const data = await res.json(); /*** now gives an array */

    return {
        props: { evenementen : data }
    }
}


/*function Profile() {
    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(false)
  
    useEffect(() => {
      setLoading(true)
      fetch('api/profile-data')
        .then((res) => res.json())
        .then((data) => {
          setData(data)
          setLoading(false)
        })
    }, [])
  
    if (isLoading) return <p>Loading...</p>
    if (!data) return <p>No profile data</p>
  
    return (
      <div>
        <h1>{data.name}</h1>
        <p>{data.bio}</p>
      </div>
    )
  }*/

const Evenementen = ({ evenementen }) => {

    return (
            <div>
                <h1>Alle evenementen</h1>
                <div className="grid grid-cols-3 gap-6">
                    {evenementen.records.map(evenement => (
                        <div className="mb-4" key={evenement.record.id}>
                            <Link href={'/evenementen/' + evenement.record.id}  >
                                <a className="block bg-white p-3.5 rounded-sm shadow-sm hover:shadow-md ">
                                    <div className="relative h-52">
                                        <Image src={evenement.record.fields.teaser_img_url} layout="fill" objectFit='cover'/>
                                    </div>
                                    
                                </a>
                            </Link>
                            <div className="my-4">
                                <h3 className="text-xs">{evenement.record.fields.titel}</h3>
                                <p className="my-4 ">{evenement.record.fields.tag_1.split(', ').map(tag => <a href="#" className="bg-grayTags rounded-xl py-1 mr-4 px-3 text-white text-xs hover:bg-blueGent" key={tag}><span >{tag}</span></a>)}</p>
                                <p className="text-grayMedium text-xs">{evenement.record.fields.adres}<br/>
                                    {evenement.record.fields.postcode}
                                    {evenement.record.fields.gemeente}
                                </p>
                            </div>                    
                        </div>
                    ))}
                </div>
                <div>
                    {evenementen.links.map(link => (
                        <div key={link.rel}>
                            <a href= {link.href}>
                                {link.rel}
                            </a>
                            
                        </div>
                    ))}
                </div>
            </div>
    );
}

export default Evenementen;