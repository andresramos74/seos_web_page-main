import { ERROR_TEXTS, LABEL_TEXTS } from "./texts"
import { TOUCHED_STATES } from "helpers/states"
import { TYPES_FORM_PARTNERS } from "actions/partnersActions"
import { useState } from 'react'
import { validateName, validateNameEvent } from "helpers/validationsFormPartners"

const referrerNameInitialValue = {
  value: '',
  touched: TOUCHED_STATES.NOT_TOUCHED
}

const nameEventInitialValue = {
  value: '',
  touched: TOUCHED_STATES.NOT_TOUCHED
}

const PartnersContactData = ({ values, errors, touched, referrerName, nameEvent, setReferrerName, setNameEvent, dispatch }) => {

  const updateFormValues = (value, name) => {

    //* Update the values of the reducer
    if (name === "email") {
      dispatch({ type: TYPES_FORM_PARTNERS.CHANGE_EMAIL, payload: value })
    }

    if (name === "phone_number") {
      dispatch({ type: TYPES_FORM_PARTNERS.CHANGE_PHONE_NUMBER, payload: value })
    }

    if (name === "web_page") {
      dispatch({ type: TYPES_FORM_PARTNERS.CHANGE_WEB_PAGE, payload: value })
    }

    if (name === "origin_lead") {
      dispatch({ type: TYPES_FORM_PARTNERS.CHANGE_ORIGIN_LEAD, payload: value })
      
      //* Depend of the value then save the initial state
      
      if(value === "Pauta"){
        setReferrerName(referrerNameInitialValue)
        setNameEvent(nameEventInitialValue)
      }

      if(value === "Acosol"){
        setReferrerName(referrerNameInitialValue)
        setNameEvent(nameEventInitialValue)
      }

      if(value === "Instalador referido"){
        setNameEvent(nameEventInitialValue)
      }

      if(value === "Evento"){
        setReferrerName(referrerNameInitialValue)
      }

    }

    if (name === "referrer_name") {

      let error = validateName(value)

      error ? setReferrerName({
        value,
        error,
        touched: TOUCHED_STATES.TOUCHED_FIRST_TIME
      }) : setReferrerName({
        value,
        touched: TOUCHED_STATES.TOUCHED_OK
      })

    }

    if (name === "name_event") {

      let error = validateNameEvent(value)

      error ? setNameEvent({
        value,
        error,
        touched: TOUCHED_STATES.TOUCHED_FIRST_TIME
      }) : setNameEvent({
        value,
        touched: TOUCHED_STATES.TOUCHED_OK
      })

    }
  }

  const handleChange = (event) => {

    const value = event.target.value
    const name = event.target.name

    updateFormValues(value, name)

  }

  const changeClassSpan = (event) => {

    const $labelParent = event.target.parentNode
    const $span = $labelParent.querySelector('span')
    const $input = $labelParent.querySelector('input')

    //* Add and delete css classes to generate the efect of the label
    $span.classList.add('content-name')
    $span.classList.add('transition')
    $span.classList.remove('content')

    $input.focus()
  }

  const handleBlurInput = (event) => {

    const $labelParent = event.target.parentNode
    const $span = $labelParent.querySelector('span')

    const name = event.target.name
    const value = event.target.value

    if (event.target.value.length === 0) {
      $span.classList.remove('content-name')
      $span.classList.remove('transition')
      $span.classList.add('content')
      $span.style.color = ''

    }

    if (event.target.value.length !== 0) {
      $span.style.color = 'black'
    }

    updateFormValues(value, name)

  }

  return (
    <article className="flex flex-wrap gap-7 px-4 pt-5 md:border-t md:border-t-gray">
      <h1 className="basis-full font-semibold">Información de contacto:</h1>
      <section className={`relative grow h-8 min-w-[300px] md:mb-0 ${errors.email && "mb-6"}`}>
        <label id="email">
          <span
            className='content absolute transition duration-300 bottom-0 z-10 p-1 pl-2 w-full'
            onClick={changeClassSpan}
          >{LABEL_TEXTS.email}</span>
          <input
            name="email"
            className='w-full bottom-0 outline-none border border-gray focus:border-seos-blue-light rounded-[4px] p-1 pl-1'
            onFocus={changeClassSpan}
            onBlur={handleBlurInput}
            onChange={handleChange}
            value={values.email}
            aria-labelledby='email'
          />
        </label>
        {
          (errors.email || touched.email === TOUCHED_STATES.TOUCHED_FIRST_TIME) ?
            <div className='text-red-warning px-1 text-sm'>{ERROR_TEXTS.email}</div>
            :
            <p className=''></p>
        }
      </section>
      <section className={`relative grow h-8 min-w-[300px] md:mb-0 ${errors.email && "mb-6"}`}>
        <label id="phone_number">
          <span
            className='content absolute transition duration-300 bottom-0 z-10 p-1 pl-2 w-full'
            onClick={changeClassSpan}
          >{LABEL_TEXTS.phone_number}</span>
          <input
            name="phone_number"
            className='w-full bottom-0 outline-none border border-gray focus:border-seos-blue-light rounded-[4px] p-1 pl-1'
            onFocus={changeClassSpan}
            onBlur={handleBlurInput}
            onChange={handleChange}
            value={values.phone_number}
            aria-labelledby='phone_number'
          />
        </label>
        {
          (errors.phone_number || touched.phone_number === TOUCHED_STATES.TOUCHED_FIRST_TIME) ?
            <div className='text-red-warning px-1 text-sm'>{ERROR_TEXTS.phone_number}</div>
            :
            <p className=''></p>
        }
      </section>
      <section className={`relative grow basis-full h-8 min-w-[300px] md:mt-6 ${errors.email && "mb-6"} md:mb-1`}>
        <label id="web_page">
          <span
            className='content absolute transition duration-300 bottom-0 z-10 p-1 pl-2 w-full'
            onClick={changeClassSpan}
          >{LABEL_TEXTS.web_page}</span>
          <input
            name="web_page"
            className='w-full bottom-0 outline-none border border-gray focus:border-seos-blue-light rounded-[4px] p-1 pl-1'
            onFocus={changeClassSpan}
            onBlur={handleBlurInput}
            onChange={handleChange}
            value={values.web_page}
            aria-labelledby='web_page'
          />
        </label>
        {
          (errors.web_page || touched.web_page === TOUCHED_STATES.TOUCHED_FIRST_TIME) ?
            <div className='text-red-warning mb-8 px-1 text-sm'>{ERROR_TEXTS.web_page}</div>
            :
            <p className='mb-6'></p>
        }
      </section>
      <section className='relative grow h-8 mt-5 min-w-[300px]' >
        <label id="origin_lead">
          <span
            className='content-name absolute transition duration-300 bottom-0 z-10 p-1 pl-2 w-full'
          /* onClick={changeClassSpan} */
          >{LABEL_TEXTS.origin_lead}</span>
          <select
            name="origin_lead"
            className='w-full bottom-0 outline-none border border-gray focus:border-seos-blue-light rounded-[4px] p-1 pl-1'
            onChange={handleChange}
            aria-labelledby='origin_lead'
          >
            <option value=""></option>
            <option value="Acosol">Acosol</option>
            <option value="Instalador referido">Instalador referido</option>
            <option value="Pauta">Pauta</option>
            <option value="Evento">Evento</option>
          </select>
        </label>
        {
          (errors.origin_lead || touched.origin_lead === TOUCHED_STATES.TOUCHED_FIRST_TIME) ?
            <div className='text-red-warning mb-8 px-1 text-sm'>{errors.origin_lead}</div>
            :
            <p className='mb-6'></p>
        }
      </section>
      {
        values.origin_lead === "Instalador referido" &&
        <section className='relative grow h-8 mt-5 min-w-[300px]' >
          <label id="referrer_name">
            <span
              className='content absolute transition duration-300 bottom-0 z-10 p-1 pl-2 w-full'
              onClick={changeClassSpan}
            >{LABEL_TEXTS.referrer_name}</span>
            <input
              name="referrer_name"
              className='w-full bottom-0 outline-none border border-gray focus:border-seos-blue-light rounded-[4px] p-1 pl-1'
              onFocus={changeClassSpan}
              onBlur={handleBlurInput}
              onChange={handleChange}
              value={referrerName.value}
              aria-labelledby='referrer_name'
            />
          </label>
          {
            (referrerName.error || referrerName.touched === TOUCHED_STATES.TOUCHED_FIRST_TIME) ?
              <div className='text-red-warning mb-8 px-1 text-sm'>{ERROR_TEXTS.referrer_name}</div>
              :
              <p className='mb-6'></p>
          }
        </section>
      }
      {
        values.origin_lead === "Evento" &&
        <section className='relative grow h-8 mt-5 min-w-[300px]' >
          <label id="name_event">
            <span
              className='content absolute transition duration-300 bottom-0 z-10 p-1 pl-2 w-full'
              onClick={changeClassSpan}
            >{LABEL_TEXTS.name_event}</span>
            <input
              name="name_event"
              className='w-full bottom-0 outline-none border border-gray focus:border-seos-blue-light rounded-[4px] p-1 pl-1'
              onFocus={changeClassSpan}
              onBlur={handleBlurInput}
              onChange={handleChange}
              value={nameEvent.value}
              aria-labelledby='name_event'
            />
          </label>
          {
            (nameEvent.error || nameEvent.touched === TOUCHED_STATES.TOUCHED_FIRST_TIME) ?
              <div className='text-red-warning mb-8 px-1 text-sm'>{ERROR_TEXTS.name_event}</div>
              :
              <p className='mb-6'></p>
          }
        </section>
      }
    </article>
  )

}

export default PartnersContactData