import React, { useState } from 'react';
import { toast } from 'react-toastify';
import './Form.css';
const Form = () => {
  const [inputValues, setInputValues] = useState({
    userName: '',
    userEmail: '',
    projectName: '',
    allCheckboxes: [],
    linkProject: '',
    deadlineOptions: '',
    numberOfTemplates: '',
    budget: '',
    description: '',
    isError: [],
  });
  const handleOnChangeSingleInputType = (e) => {
    let inputName = e.target.name;
    let inputValue = e.target.value;
    setInputValues({ ...inputValues, [inputName]: inputValue });
  };
  const handleOnChangeGroupInputType = (e) => {
    let isChecked = e.target.checked;
    let checkboxValue = e.target.value;
    if (isChecked) {
      setInputValues({
        ...inputValues,
        allCheckboxes: [...inputValues.allCheckboxes, checkboxValue],
      });
    } else {
      setInputValues({
        ...inputValues,
        allCheckboxes: inputValues.allCheckboxes.filter(
          (item) => item !== checkboxValue
        ),
      });
    }
  };
  const handleSubmitForm = (e) => {
    e.preventDefault();
    const inputRequired = [
      'userName',
      'userEmail',
      'projectName',
      'allCheckboxes',
      'linkProject',
      'deadlineOptions',
      'numberOfTemplates',
      'budget',
      'description',
    ];
    for (let i = 0; i < inputRequired.length; i++) {
      if (
        inputValues[inputRequired[i]] === '' ||
        inputValues[inputRequired[i]].length === 0
      ) {
        setInputValues({ ...inputValues, isError: true });
        toast.error('This filed is required: ' + inputRequired[i]);
        return;
      }
    }
    toast.success('Form submitted successfully !');
  };
  return (
    <form className='form' onSubmit={(e) => handleSubmitForm(e)}>
      <h1 className='form-header'>Request for proposal</h1>
      <div className='inputs-container'>
        <div className='form-group'>
          <label htmlFor='userName' className='label-fluid'>
            Name
          </label>
          <input
            type='text'
            name='userName'
            className='form-control'
            onChange={(e) => handleOnChangeSingleInputType(e)}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='email' className='label-fluid'>
            Email
          </label>
          <input
            type='email'
            name='userEmail'
            className='form-control'
            onChange={(e) => handleOnChangeSingleInputType(e)}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='email' className='label-fluid'>
            Business or project name
          </label>
          <input
            type='text'
            name='projectName'
            className='form-control'
            onChange={(e) => handleOnChangeSingleInputType(e)}
          />
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
                onChange={(e) => handleOnChangeGroupInputType(e)}
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
                onChange={(e) => handleOnChangeGroupInputType(e)}
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
                onChange={(e) => handleOnChangeGroupInputType(e)}
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
                onChange={(e) => handleOnChangeGroupInputType(e)}
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
            onChange={(e) => handleOnChangeSingleInputType(e)}
          />
        </div>
        <section className='three-part'>
          <div>
            <label htmlFor='deadline' className='label-fluid'>
              Deadline
            </label>
            <select
              name='deadlineOptions'
              id='deadline-options'
              onChange={(e) => handleOnChangeSingleInputType(e)}
            >
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
              onChange={(e) => handleOnChangeSingleInputType(e)}
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
                  onChange={(e) => handleOnChangeSingleInputType(e)}
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
                  onChange={(e) => handleOnChangeSingleInputType(e)}
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
                  onChange={(e) => handleOnChangeSingleInputType(e)}
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
            onChange={(e) => handleOnChangeSingleInputType(e)}
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
