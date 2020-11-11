import * as  React from "react";
import "./styles/index.css";

export class About extends React.Component {
    render() {
        return(
            <div id="about" style={{backgroundColor:"black", color:"white", marginTop:"20%", marginLeft:"auto", marginRight:"auto",
      paddingTop:5, paddingBottom:20
      // paddingTop: 3000, position:"relative" ,top:450
  }}>
        <h1>ABOUT US</h1>
        <span style={{color:"red", fontSize:24}}> Your best skincare routine</span>
        <p style={{fontSize:24, margin:"0 5%"}}> 
              Located in Bugolobi, Bedolled is a beauty salon offering a variety
          of skin care services that are delivered with kindness and professionalism. 
          Opened 8 years ago, Beedolled strives to deliver timely, professional outstanding
          services with a flare for style and energy.
              At Beedolled, we believe beauty shouldn't be compromised by harmful ingredients, 
          so we provide clients the best products containing fewer toxins. 
          Not only do we enhance your physical appearance and relaxation at 
          Beedolled, we do so with your overall well-being in mind. 
              We strive for exceptional standards of 
          quality products, treatments, and guest care, 
          and everything we do reflects the standards of Beedolled.  
          We pride ourselves in customer satisfaction.
          </p>
          <span style={{color:"red" , fontSize:24}}> Who Are We?</span>
          <p style={{fontSize:24, margin:"0 5%"}}>
              We are a bunch of service obsessed people who love to
          enhance the beauty of others both inside and out.
          Our carefully chosen and highly trained staff is here to 
          exceed your expectations. The same goes for our elegant 
          salon space – warm, inviting & professional – and our devotion 
          to innovation and artistry.  
          We’re focused on making your day and continually raising the bar.
        </p>
         <img
         src="https://res.cloudinary.com/sabago/image/upload/c_scale,h_600/v1602737082/beetheboss_nfcjat.jpg"/> 
         <p style={{maxWidth:800, minWidth:200, fontSize:24,display:"inline-block", marginRight: 80, marginLeft: 50}}>
           <span style={{color:"red"}}>Meet your main stylist!</span> <br />
           "Hi, Im Brenda, the founder of Beedolled. I have certifications in Miroblading...
         Hi, Im Brenda, the founder of Beedolled. I have certifications in Miroblading...
         Hi, Im Brenda, the founder of Beedolled. I have certifications in Miroblading..."
         </p>
      </div>
        );
    }
}