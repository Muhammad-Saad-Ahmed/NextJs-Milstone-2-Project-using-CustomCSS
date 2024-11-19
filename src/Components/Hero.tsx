import Image from "next/image";
import "../Style/hero.css";
import Link from "next/link";

function Hero(){

    return(
        <div className="Hero-Div">
            <div className="Hero-Both">
            <div>
                <Image src={"/Images/New.jpg"}
                width={200}
                height={200}
                className="Hero-image"
                 alt="Image"/>
            </div>
            <div className="Hero-right">
                <h1 className="Hero-Head"> Professional Portfolio of <span>Muhammad Saad Ahmed!</span></h1> 
                <h1 className="Hero-Head"> The Front-End Developer </h1>
                <p className="Hero-Content">
                    With a wealth of experience in leadership, technology, and business operations, Muhammad Saad Ahmed exemplifies innovation, dedication, and strategic expertise. Starting as a Key Punch Operator and rising through roles such as Regional Coordinator and Assistant Accounts Manager, Saad has amassed extensive experience that now shapes his impactful leadership at KTM Manufacturing Co.
                </p>
               <button className="Hero-Button"><Link href="./contactus">Contact Us</Link></button>
            </div>
            </div>  
        </div>
    )
}

export default Hero