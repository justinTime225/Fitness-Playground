import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { Link } from 'react-router';
import { createPost } from '../actions/form.action.js';
const validate = values => {
  const errors = {};
  for (let key in values) {
    if (!values[key] || values[key] === 'Select') {
      errors[key] = 'Required';
    }
  }
  return errors;
};
class Form extends Component {
  static contextTypes = {
    router: PropTypes.object
  };
  onSubmit(props) {
    this.props.createPost(props)
      .then(() => {
        // form has been submitted, navigate user to custom route
        this.context.router.push('/custom');
      });
  }
  render() {
    const { fields: {theme, superset, buildType, intensity}, handleSubmit } = this.props;
    return <div>
      <h3>Customize your plan workout plan</h3>
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <div className="form-group has-warning">
          <label htmlFor="s1"></label>
          <h3>Exercise Theme</h3>
          <select id="s1" value="Push" className="form-control" {...theme} >
            <option value="Select">Select</option> 
            <option value="push">Push</option>
            <option value="pull">Pull</option>
            <option value="lowerbody">Lower Body</option>
          </select>
          {theme.touched && theme.error && <div style={{ color: 'red' }}>{theme.error}</div>}
        </div>
        <div className="form-group has-warning">
          <label htmlFor="s1"></label>
          <h3>Superset</h3>
          <select id="s1" value="True" className="form-control"  {...superset}> 
            <option value="Select">Select</option> 
            <option value="true">Yes, make it challenging</option>
            <option value="false">Not today</option>
          </select>
          {superset.touched && superset.error && <div style={{ color: 'red' }}>{superset.error}</div>}
        </div>
        <div className="form-group has-warning">
          <label htmlFor="s1"></label>
          <h3>Type of Exercise</h3>
          <select id="s1" value="Bulk" className="form-control" {...buildType} > 
            <option value="Select">Select</option> 
            <option value="Bulk">Bulking</option>
            <option value="Tone">Toning</option>
          </select>
          {buildType.touched && buildType.error && <div style={{ color: 'red' }}>{buildType.error}</div>}
        </div>
        <div className="form-group has-warning">
          <label htmlFor="s1"></label>
          <h3>Intensity</h3>
          <select id="s1" value="Heavy" className="form-control" {...intensity} > 
            <option value="Select">Select</option> 
            <option value="Heavy">Heavy</option>
            <option value="Light">Light</option>
          </select>
          {intensity.touched && intensity.error && <div style={{ color: 'red' }}>{intensity.error}</div>}
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>

      </form>
    </div>;
  }
}

function mapStateToProps(state) {
  return {
    custom: state.customWorkout.list
  };
}

export default reduxForm({
  form: 'UserForm',
  fields: ['theme', 'superset', 'buildType', 'intensity'],
  validate
}, mapStateToProps, { createPost })(Form);