import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Input from '../presentational/Input'
import { updateVal } from '../../../redux/actions'
import { connect } from 'react-redux'
import './style.less'

class FormContainer extends React.Component {
  constructor() {
    super()
    this.state = {
      seo_title: '12345677'
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event) {
    this.props.onChangeVal(event.target.value)
    // this.setState({ [event.target.id]: event.target.value });
  }
  render() {
    return (
      <div className="user-container">
        <form id="article-form">
          <Input
            text="SEO title"
            label="seo_title"
            type="text"
            id="seo_title"
            value={this.props.value}
            handleChange={this.handleChange}
          />
          {this.props.showInfo}
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    value: state.value,
    showInfo: state.showInfo
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onChangeVal: text => {
      dispatch(updateVal(text))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormContainer)
