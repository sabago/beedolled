import * as React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScrollToTop from "./scrollTop";
import { Navigation } from "./components/navigation";
import  Home  from "./components/home";
import { Services } from "./components/services";
import { SpecialOffers } from './components/special-offers';
import { About } from './components/about';
import { Contact } from './components/contact';
import BookOnline from "./components/book-online";
import   Blog   from "../pages";
import { Accessories } from './components/accessories';

export default class Routes extends React.Component {
    render() {
        return (
            <Router basename={process.env.PUBLIC_URL}>
                <ScrollToTop>
                <Navigation />
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/services" component={Services} />
                    <Route path="/special-offers" component={SpecialOffers} />
                    <Route path="/about" component={About} />
                    <Route path="/contact-us" component={Contact} />
                    <Route path="/book-online" component={BookOnline} />
                    <Route path="/blog" component={Blog}/>
                    {/* <Route path="/accessories" component={Accessories} /> */}
                </Switch>
                </ScrollToTop>
             </Router> 
        );
    }
}