/**  @jsx jsx  */
import { jsx } from '@emotion/core';
import { useState } from 'react';

const Form = ({ handleSubmit }) => {
  const [email, setEmail] = useState('');
  const [lastName, setLastName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [submited, setSubmited] = useState(false);
  const [description, setDescription] = useState('');
  // const [accountType, setAccountType] = useState('');

  const handleForm = (e) => {
    e.preventDefault();
    handleSubmit({
      email,
      use: description,
      lastname: lastName,
      firstname: firstName,
    });
    setSubmited(true);
  };
  return (
    <form onSubmit={handleForm}>
      {/* <div
        css={{
          
          marginBottom: '34px',
          input: {
            top: '4px',
            width: '16px',
            height: '16px',
            appearance: 'none',
            marginRight: '5px',
            borderRadius: '50%',
            position: 'relative',
            MozAppearance: 'none',
            WebkitAppearance: 'none',
            border: '2px solid #C9C9C9',
            transition: '0.2s all linear',
            '&:checked': {
              border: '6px solid #354F52',
            },
          },
          label: {
            color: '#2F3E46',
            lineHeight: '32px',
            marginRight: '15px',
            font: 'normal normal normal 16px/19px PT Sans',
          },
        }}
      >
        <div
          css={{
            color: '#707070',
            marginBottom: '10px',
            font: 'normal normal normal 14px/16px PT Sans',
          }}
        >
          Account Type
        </div>
        <div css={{ marginBottom: '10px' }}>
          <input
            id='patron'
            name='drone'
            type='radio'
            value='patron'
            checked={accountType === 'patron'}
            onChange={({ target }) => {
              setAccountType(target.value);
            }}
          />
          <label htmlFor='patron'>Patron</label>
        </div>
        <div>
          <input
            type='radio'
            id='free'
            name='drone'
            value='free'
            checked={accountType === 'free'}
            onChange={({ target }) => {
              setAccountType(target.value);
            }}
          />
          <label htmlFor='free'>Free (1,000 daily request limit)</label>
        </div>
      </div> */}
      <div
        css={{
          label: {
            color: '#707070',
            marginBottom: '9px',
            textTransform: 'capitalize',
            font: 'normal normal normal 14px/16px PT Sans',
          },
          'input, textarea': {
            padding: '16px',
            color: '#354F52',
            borderRadius: '3px',
            border: '2px solid #dfdfdf',
            font: 'normal normal normal 16px/20px PT Sans',
            '&::placeholder': {
              color: '#C9C9C9',
            },
            '&:focus':  {
              outline: 'none',
              border: '2px solid #C9C9C9',
            }
          },
        }}
      >
        <div
          css={{
            display: 'flex',
            margin: '24px 0',
            flexDirection: 'column',
          }}
        >
          <label htmlFor='email'>Email Address</label>
          <input
            autoFocus
            value={email}
            onChange={({ target }) => {
              setEmail(target.value);
            }}
            id='email'
            type='email'
            name='email'
            placeholder='Enter your email address'
            required
          />
        </div>
        <div
          css={{
            display: 'flex',
            justifyContent: 'space-between',
            div: {
              display: 'flex',
              margin: '24px 0',
              width: 'calc(50% - 12px)',
              flexDirection: 'column',
            },
          }}
        >
          <div>
            <label htmlFor='firstname'>first name</label>
            <input
              value={firstName}
              onChange={({ target }) => {
                setFirstName(target.value);
              }}
              type='text'
              id='firstname'
              name='firstname'
              placeholder='Enter your first name'
              required
            />
          </div>
          <div>
            <label htmlFor='lastname'>last name</label>
            <input
              value={lastName}
              onChange={({ target }) => {
                setLastName(target.value);
              }}
              required
              type='text'
              id='lastname'
              placeholder='Enter your last name'
            />
          </div>
        </div>
        <div
          css={{
            display: 'flex',
            margin: '24px 0',
            flexDirection: 'column',
          }}
        >
          <label htmlFor='description'>
            Description of what you want to use this API for
          </label>

          <textarea
            required
            maxLength='150'
            id='description'
            name='description'
            value={description}
            onChange={({ target }) => {
              setDescription(target.value);
            }}
          ></textarea>
        </div>
      </div>
      <div
        css={{
          margin: '24px 0',
          display: 'flex',
          textAlign: 'center',
          justifyContent: 'center',
          'input, div': {
            color: '#fff',
            width: '184px',
            cursor: 'pointer',
            borderRadius: '3px',
            border: '1px solid transparent',
            background: '#84A98C 0% 0% no-repeat padding-box',
            filter: 'drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.24))',
          },
        }}
      >
        {submited ? (
          <div
            css={{
              height: '30px',
              display: 'flex',
              padding: '7px 0',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <img
              alt='loading'
              src='/image/spinner.svg'
              css={{
                width: '30px',
              }}
            />
          </div>
        ) : (
          <input
            type='submit'
            value='Submit'
            css={{
              padding: '15px 0',
              '&:hover': {
                background: '#354F52',
              },
            }}
          />
        )}
      </div>
    </form>
  );
};
export default Form;
