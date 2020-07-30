import React, { Component } from "react"

class ErrorBoundary extends Component{
    constructor(props){
        super(props);
        this.state = {hasError: false}
    }

    componentDidCatch(){
        this.setState({hasError: true})

    }
    render(){
        if(this.state.hasError){
            return(
                <div>
                    <h1>Uh oh. Looks like we got an error</h1>
                    <p>Refresh the page or come back later...</p>
                </div>
            )
        }
        return this.props.children
        
    }
}

export default ErrorBoundary
