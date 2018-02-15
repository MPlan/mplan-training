import * as React from 'react';
import * as Record from 'recordize';
import styled from 'styled-components';

// there are two ways to create React elements:
// 1) using a function (these are called "Stateless components")

// define the properties of the element using an interface
interface StatelessComponentProps {
  someProperty: string,
  optionalProperty?: string,
}
// define the function that will become the element
function StatelessComponent(props: StatelessComponentProps) {
  return <div>  
    this is a stateless component. someProperty {props.someProperty}
    {/*if*/ props.optionalProperty
      ? <div>optionalProperty: {props.optionalProperty}</div>
      : <div>no optional property present</div>
    }
  </div>;
}

// 2) using a class that extends `React.Component` (these are called "Stateful components")
interface StatefulComponentProps { initialCount?: number }
interface StatefulComponentState { count: number }
class StatefulComponent extends React.Component<StatefulComponentProps, StatefulComponentState> {

  constructor(props: StatefulComponentProps) {
    super(props);
    // set the intial state
    this.state = {
      count: this.props.initialCount || 0,
    };
  }

  handleMinusClick = () => {
    this.setState(previousState => {
      const newState = {
        count: previousState.count - 1,
      };

      return newState;
    });
  }

  handlePlusClick = () => {
    this.setState(previousState => ({
      count: previousState.count + 1,
    }))
  }

  render() {
    return <div>
      <div>count: {this.state.count}</div>
      <button onClick={this.handleMinusClick}>-</button>
      <button onClick={this.handlePlusClick}>+</button>
    </div>;
  }
}

export function App() {
  return <div>
    {/* use the elements */}
    <StatelessComponent someProperty='some value' />
    <StatelessComponent someProperty='some value' optionalProperty='some other value' />
    <StatefulComponent initialCount={5} />
    <StatefulComponent />
  </div>;
}
