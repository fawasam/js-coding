import { PureComponent } from "react";

class MyPureComponent extends PureComponent {
  render() {
    // eslint-disable-next-line react/prop-types
    return <div>Hello, {this.props.name}!</div>;
  }
}

export default MyPureComponent;
