import Link from 'next/link'
import Image from 'next/image';

const Navbar = () => {
    return (
        
            <nav className="border-b border-grayLine bg-white">
                <div className="container p-4 max-w-5xl flex justify-end items-end">
                    <div className="mr-auto w-32">
                        <Image src="/images/logo.png" width={284} height={177} layout="intrinsic"></Image>
                    </div>
                    <Link href="/" ><a className="mr-6">Home</a></Link>
                    <Link href="/about" ><a className="mr-6">About</a></Link>
                    <Link href="/evenementen" ><a>Lijst evenementen</a></Link>
                </div>
            </nav>
        
    );
}
 
export default Navbar;