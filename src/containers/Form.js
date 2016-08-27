import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/form.action.js';
class Form extends Component {
  render() {
    console.log('in test route', this.props.custom);
    const { fields: {theme, superset, buildType, intensity}, handleSubmit } = this.props;

    return <div>
      <div>Create Form</div>
      <form onSubmit={handleSubmit(this.props.createPost)}>
        <div className="form-group has-warning">
          <label htmlFor="s1"></label>
          <h3>Exercise Theme</h3>
          <select id="s1" value="Push" className="form-control" {...theme} >
            <option value="Select">Select</option> 
            <option value="Push">Push</option>
            <option value="Pull">Pull</option>
            <option value="Legs">Legs</option>
          </select>
        </div>
        <div className="form-group has-warning">
          <label htmlFor="s1"></label>
          <h3>Superset</h3>
          <select id="s1" value="True" className="form-control"  {...superset}> 
            <option value="Select">Select</option> 
            <option value="True">Yes, make it challenging</option>
            <option value="False">Not today</option>
          </select>
        </div>
        <div className="form-group has-warning">
          <label htmlFor="s1"></label>
          <h3>Type of Exercise</h3>
          <select id="s1" value="Bulk" className="form-control" {...buildType} > 
            <option value="Select">Select</option> 
            <option value="Bulk">Bulking</option>
            <option value="Tone">Toning</option>
          </select>
        </div>
        <div className="form-group has-warning">
          <label htmlFor="s1"></label>
          <h3>Intensity</h3>
          <select id="s1" value="Heavy" className="form-control" {...intensity} > 
            <option value="Select">Select</option> 
            <option value="Heavy">Heavy</option>
            <option value="Light">Light</option>
          </select>
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
  fields: ['theme', 'superset', 'buildType', 'intensity']
}, mapStateToProps, { createPost })(Form);