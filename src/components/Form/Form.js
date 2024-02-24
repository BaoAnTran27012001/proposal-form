import React, { useState } from 'react';
import './Form.css';
const Form = () => {
  return (
    <form className='form'>
      <h1 className='form-header'>Request for proposal</h1>
      <div className='inputs-container'>
        <div className='form-group'>
          <label htmlFor='userName' className='label-fluid'>
            Name
          </label>
          <input type='text' name='userName' className='form-control' />
        </div>
        <div className='form-group'>
          <label htmlFor='email' className='label-fluid'>
            Email
          </label>
          <input type='email' name='userEmail' className='form-control' />
        </div>
        <div className='form-group'>
          <label htmlFor='email' className='label-fluid'>
            Business or project name
          </label>
          <input type='text' name='projectName' className='form-control' />
        </div>
        {/* Checkbox Section */}
        <div className='form-group'>
          <label htmlFor='projectType' className='label-fluid'>
            Project Type
          </label>
          <div className='project-checkboxes'>
            <div className='checkbox-item'>
              <input
                type='checkbox'
                name='Figma-Web-Flow'
                className='form-control'
                id='figma-webflow'
                value='figma-webflow'
              />
              <label htmlFor='figma-webflow'>Figma to Webflow</label>
            </div>
            <div className='checkbox-item'>
              <input
                type='checkbox'
                name='Animation-Design-Build'
                className='form-control'
                id='animation-design'
                value='animation-design-build'
              />
              <label htmlFor='animation-design'>Animation Design & Build</label>
            </div>
            <div className='checkbox-item'>
              <input
                type='checkbox'
                name='Audit-Fix'
                className='form-control'
                id='audit-fix'
                value='audit-fix'
              />
              <label htmlFor='audit-fix'>Audit & Fix</label>
            </div>
            <div className='checkbox-item'>
              <input
                type='checkbox'
                name='QuestionLogic-Integration'
                className='form-control'
                id='question'
                value='question-logic-integration'
              />
              <label htmlFor='question'>Question Logic & Integrations</label>
            </div>
          </div>
        </div>
        {/* End Checkbox ection */}
        <div className='form-group width-100'>
          <label htmlFor='link-project' className='label-fluid'>
            Figma,XD,Webflow or loom link
          </label>
          <input
            type='text'
            name='linkProject'
            className='form-control'
            id='link-project'
          />
        </div>
        <section className='three-part'>
          <div>
            <label htmlFor='deadline' className='label-fluid'>
              Deadline
            </label>
            <select name='deadlineOptions' id='deadline-options'>
              <option value='' className='option-control'>
                Select option
              </option>
              <option value='less-than-a-month' className='option-control'>
                Less than a month
              </option>
              <option value='more-than-a-month' className='option-control'>
                More than a month
              </option>
            </select>
          </div>
          <div>
            <label htmlFor='unique-template' className='label-fluid'>
              Unique Template Page
            </label>
            <input
              type='number'
              name='numberOfTemplates'
              className='number-group'
            />
          </div>
          <div className='form-group' style={{ marginLeft: '85px' }}>
            <label htmlFor='projectType' className='label-fluid'>
              What's your budget ?
            </label>
            <div className='project-checkboxes'>
              <div className='checkbox-item'>
                <input
                  type='radio'
                  name='budget'
                  className='form-control'
                  id='hourly'
                  value='hourly'
                />
                <label htmlFor='hourly'>Hourly</label>
              </div>
              <div className='checkbox-item'>
                <input
                  type='radio'
                  name='budget'
                  className='form-control'
                  id='percent'
                  value='percent'
                />
                <label htmlFor='percent'>Less than $2%</label>
              </div>
              <div className='checkbox-item'>
                <input
                  type='radio'
                  name='budget'
                  className='form-control'
                  id='agency'
                  value='agency'
                />
                <label htmlFor='agency'>Agency to Propose</label>
              </div>
            </div>
          </div>
        </section>
        <div className='form-group width-textarea'>
          <label htmlFor='userName' className='label-fluid'>
            Description
          </label>
          <textarea
            placeholder='Please share any infomation about your project'
            name='description'
            id='description'
            cols='30'
            rows='10'
          ></textarea>
        </div>
        <button type='submit' className='btn-submit'>
          Submit
        </button>
      </div>
    </form>
  );
};

export default Form;
