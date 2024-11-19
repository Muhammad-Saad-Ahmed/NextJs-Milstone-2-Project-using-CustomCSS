import "../Style/services.css";
import { FaLaptopCode } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { RiFileExcelFill } from "react-icons/ri";
import { MdAccountBalance } from "react-icons/md";
import { MdOutlineInventory } from "react-icons/md";
import { AiOutlineAudit } from "react-icons/ai";

function Services2 (){
    return(
        <main className="main">
            <div className="ser-container">
                <div className="ser-top">
                    <h2 className="ser-title">My Services</h2>
                    <p className="ser-des">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, quos?</p>
                </div>
                <div className="boxes-con">
                    <div className="boxes">
                        <FaLaptopCode  className="ser-icon"/>
                        <h3>Web Development </h3>
                        <p>Blog, E-Commerce</p>
                    </div>
                    <div className="boxes">
                        <FaHtml5  className="ser-icon"/>
                        <h3>HTML5 </h3>
                        <p>Stucture Website</p>
                    </div>
                    <div className="boxes">
                        <RiFileExcelFill  className="ser-icon"/>
                        <h3>Microsoft Excel </h3>
                        <p>Data Analysis</p>
                    </div>
                    <div className="boxes">
                        <MdAccountBalance  className="ser-icon"/>
                        <h3>Accounts </h3>
                        <p>Handling Accounts Department  </p>
                    </div>
                    <div className="boxes">
                        <MdOutlineInventory  className="ser-icon"/>
                        <h3>Inventroy Managment </h3>
                        <p>Invetroy Record Update</p>
                    </div>
                    <div className="boxes">
                        <AiOutlineAudit  className="ser-icon"/>
                        <h3>Audit Officer</h3>
                        <p>Expert in External Audit</p>
                    </div>  
                   
                </div>

            </div>
        </main>
    )};

export default Services2