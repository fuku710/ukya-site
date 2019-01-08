import React from 'react'
import Transition from 'react-transition-group/Transition'

const duration = 300

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
}

const transitionStyles = {
  entering: { opacity: 0 },
  entered: { opacity: 1 },
}

class TransitionContainer extends React.Component {
  // constructor(props) {
  //   super(props)
  // }
  componentWillUpdate(previousProps) {
    console.log(previousProps)
  }
  render() {
    // console.log(this.props)
    const { inProp, children } = this.props
    return (
      <Transition in={inProp} timeout={duration}>
        {state => (
          <div>
            {/* {state} */}
            <div style={{ ...defaultStyle, ...transitionStyles[state] }}>
              {children}
            </div>
          </div>
        )}
      </Transition>
    )
  }
}

export default TransitionContainer
