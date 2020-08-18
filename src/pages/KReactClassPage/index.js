import React,{Component} from "../../kreact";

class KReactClassPage extends Component {
    static defaultProps ={
        color:"green"
    }

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={"border"}>
                <h1>KReactClassPage</h1>
                <hr/>
                <p className={this.props.color}>name: {this.props.name}</p>
                <a href="https://www.kaikeba.com">开课吧</a>
            </div>
        );
    }
}

export default KReactClassPage;