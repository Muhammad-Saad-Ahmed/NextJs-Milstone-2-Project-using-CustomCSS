import "../Style/contact.css"

function Contact(){
    return(
       
        <main className="Con-main">
            <div className="Con-div">   
                <h1> Contact Us</h1>
                <form action="" className="Con-form">
                    <input className="con-box" type="text" placeholder="Enter Your Name"/>
                    <input className="con-box" type="email" placeholder="Abc@gmail.com"/>
                    <input className="con-box message" type="text" placeholder="Enter Your Message"/>
                </form>
                <button className="Con-submit">Submit</button>
            </div>      
        </main>
        
    )
}

export default Contact