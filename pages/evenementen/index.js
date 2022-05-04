import Layout from '../../components/Layout'
import Link from 'next/link'
import Image from 'next/image';

export const getStaticProps = async () => {
    /** runs at build time */
    const res = await fetch('https://data.stad.gent/api/v2/catalog/datasets/stap-naar-de-klas-gent/records/');
    const data = await res.json(); /*** now gives an array */

    return {
        props: { evenementen : data.records }
    }
}

const Evenementen = ({ evenementen }) => {

    return (
            <div>
                <h1>Alle evenementen</h1>
                <div className="grid grid-cols-3 gap-6">
                {evenementen.map(evenement => (
                    <Link href={'/evenementen/' + evenement.record.id} key={evenement.record.id} >
                        <a className="bg-gray-200 block mb-4">
                            <div className="h-52 relative">
                                <Image src={evenement.record.fields.teaser_img_url} layout="fill" objectFit='cover'/>
                            </div>
                            <div className="p-4">
                                <h3 className="text-md font-bold">{evenement.record.fields.titel}</h3>
                                <p>{evenement.record.fields.tag_1.split(', ').map(tag => <span key={tag}>{tag}</span>)}</p>
                                <p>{evenement.record.fields.adres}<br/>
                                    {evenement.record.fields.postcode}
                                    {evenement.record.fields.gemeente}
                                </p>
                                <button className="text-sky-600 font-bold">Lees meer</button>
        
                            </div>
                        
                            
                        </a>
                    </Link>
                ))}
                </div>
            </div>
    );
}

export default Evenementen;