    import Image from "next/image";
    import "../Style/aboutus.css";
    import Link from "next/link";
    import { FaFacebook } from "react-icons/fa";
    import { IoLogoYoutube } from "react-icons/io";
    import { IoLogoInstagram } from "react-icons/io";


    function About(){

        return(
            <div className="About-Div">
                <div className="About-Both">
                <div>
                    <Image src={"/Images/About Me.webp"}
                    width={200}
                    height={200}
                    className="About-image"
                    alt="Image"/>
                    <div className="icon-div">
                        <Link href="https://www.facebook.com/"><FaFacebook className="Icon1"/></Link>
                        <Link href="https://www.youtube.com/"><IoLogoYoutube className="Icon2"/></Link>
                        <Link href="https://www.instagram.com/"><IoLogoInstagram className="Icon3"/></Link>
                    </div>
                </div>
                <div className="About-right">
                    <h1 className="About-Head">About Us</h1> 
                    <div className="About-Content"><ul><li><b>Leadership:</b> As the Assistant Business Head at KTM Manufacturing Co., Saad leads with insight and innovation, streamlining business operations and driving growth strategies.</li>
                    <li><b>Technical Proficiency:</b> Expertise in HTML, CSS, TypeScript, and Excel ensures a tech-driven approach to business solutions.
                    </li>
                    <li><b>Administrative and Financial Acumen:</b> From HR management to cash flow optimization, Saad combines meticulous administration with keen financial insight.</li></ul>
                    <p>
                    Experience the dedication and excellence that Muhammad Saad Ahmed brings to every project, every challenge, and every client partnership. Discover how his journey can inspire, innovate, and drive forward-thinking success.</p></div>
                    {/* <button className="Hero-Button">Contact Us</button> */}
                </div>
                </div>
            </div>
        )
    }

    export default About


