import * as React from "react";
// import { useRef } from "react";
// import ReactDOM from "react-dom";
import { RouteComponentProps, withRouter } from "react-router-dom";

class ScrollToTop extends React.Component<RouteComponentProps> {
    // refs!: {
    //     [string: string]: any;
    //     node: any;
    // };
    // node!: () => Element | Text | null;
    // myRefs2: any;
    // constructor( _RouteComponentProps: any) {
    //     super(_RouteComponentProps);
    //     this.refs.node = useRef<null | HTMLElement>(null);
    //     // this.myRefs= React.createRef();
    // }
    componentDidUpdate(prevProps: { location: any; }) {
      if (this.props.location !== prevProps.location) {
        window.scrollTo(0, 0)
      }

//       let hash = this.props.location.hash.replace('#', '');
//         if (hash) {
//             this.node = () => ReactDOM.findDOMNode(this.refs.stepInput[hash]);
//         // let node = ReactDOM.findDOMNode(this.refs.stepInput[hash]);
//         if (this.refs.node) {
//             this.refs.node.scrollIntoView({
//                 behavior: 'smooth',
//                 block: 'start',
//                 inline: 'center'
//                 });
//   }
// }
    }
  
    render() {
      return this.props.children
    }
  }
  
  export default withRouter(ScrollToTop)