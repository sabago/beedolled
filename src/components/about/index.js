import * as  React from "react";
import "./styles/index.css";

export class About extends React.Component {
    render() {
        return(
            <div id="about">
            <h1>ABOUT US</h1>
            <span className="about-span"> Our Motto: <br/> "To look good is to feel good"</span>
            <p style={{fontSize:24, margin:"0 5%"}}> 
                Beedolled is a makeup and beauty entity trading as Fleek Squad Limited.
                Located in Bugolobi, Beedolled is a beauty salon offering a variety
                of skin care services that are delivered with kindness and professionalism.
                Beedolled started business in 2012 as a make-up studio with a focus on event,
                bridal and film make-up. Today the company is the pioneer permanent makeup 
                operation in Uganda with services like Microblading and Microshading. 
                At Beedolled, we believe beauty shouldn't be compromised by harmful ingredients, 
                so we provide clients the best, safe and tested products. 
                Not only do we enhance your physical appearance and relaxation at 
                Beedolled, we do so with your overall well-being in mind. 
                We strive for exceptional guest care, outstanding professional services
                with a flare for style and energy, and everything we do reflects in our standards.  
                We pride ourselves in customer satisfaction!
            </p>
            <span className="about-span"> Who Are We?</span>
            <p style={{fontSize:24, margin:"0 5%"}}>
                We are a bunch of service obsessed people who love to
                enhance the beauty of others both inside and out.
                Our carefully chosen and highly trained staff is here to 
                exceed your expectations. The same goes for our elegant 
                salon space – warm, inviting & professional – and our devotion 
                to innovation and artistry.  
                We’re focused on making your day and continually raising the bar.
            </p>
            <img src="https://res.cloudinary.com/sabago/image/upload/c_scale,h_600/v1602737082/beetheboss_nfcjat.jpg"/> 
            <p style={{maxWidth:800, minWidth:200, fontSize:24,display:"inline-block", marginRight: 80, marginLeft: 50, verticalAlign:"middle"}}>
                <span className="about-span">Meet your main stylist!</span> <br />
                Brenda, the founder of Beedolled is a highly gifted and creative Makeup Artist with more than 8 years of experience. <br />
                "Beedolled is very cautious in interpretation of make-up requirements of clients and 
                production of both a creative and technically accurate visual representation of what is 
                required. We have a good knowledge of advanced artistry in the field, and an ability 
                to stay ahead of the curve where latest trends are concerned." <br/>
                <span className="about-span">~Brenda</span>
            </p>
        </div>
        );
    }
}