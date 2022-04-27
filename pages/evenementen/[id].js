import Link from 'next/link'

export const getStaticPaths = async () => {
    const res = await fetch('https://data.stad.gent/api/v2/catalog/datasets/stap-naar-de-klas-gent/records/');
    const data = await res.json();
    const evenementen = data.records;

    const paths = evenementen.map(evenement => {
        return {
            params: { id : evenement.record.id.toString() }
        }
    })

    return {
        paths,
        fallback : false
    }
}

export const getStaticProps = async (context) => {
    /** runs each time for every evenement */
    const id = context.params.id;
    const res = await fetch('https://data.stad.gent/api/v2/catalog/datasets/stap-naar-de-klas-gent/records/' + id);
    const data = await res.json(); /*** now gives an array */

    return {
        props: { evenement : data.record }
    }
}


const Details = ({ evenement}) => {
    return (
            <div>
                <h1>{ evenement.fields.titel}</h1>
                <div dangerouslySetInnerHTML={{ __html: evenement.fields.beschrijving}}></div>
                
                Locatie: <br/>
                  {evenement.fields.adres}<br/>
                  {evenement.fields.postcode} {evenement.fields.gemeente} <br/><br/>

                  <Link href="/evenementen"><a className="bg-sky-700 text-white p-4 rounded-lg inline-block mt-4">Terug naar lijst</a></Link>
            </div>
    );
}

export default Details;