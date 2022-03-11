
import { Component } from 'react';

class ErrorBoundary extends Component {
    state = {
        isError: false
    }

    componentDidCatch(err) {
        this.setState({ isError: true }, () => console.log({ err }))
    }


    render() {
        if (this.state.isError) {
            return this.props.errorCmp
        }
        return this.props.children
    }
}



export default ErrorBoundary
