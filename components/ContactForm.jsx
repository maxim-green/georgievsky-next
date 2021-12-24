import classes from '../styles/ContactForm.module.scss'
import {useState} from 'react'
import rewritePattern from 'regexpu-core'

export default function ContactForm() {
    const [nameField, setNameField] = useState({
        value: '',
        isValid: false,
        isTouched: false
    })
    const [emailField, setEmailField] = useState({
        value: '',
        isValid: false,
        isTouched: false
    })
    const [messageField, setMessageField] = useState({
        value: '',
        isValid: false,
        isTouched: false
    })
    const [formValid, setFormValid] = useState(false)

    // creating regExp for names. needed because JS dont support unicode properties (\p) natively
    const re = new RegExp(rewritePattern('^[\\p{Lu}\\p{Ll}\\p{Lu}\\p{Ll}]+[\\p{Lu}\\p{Ll}\\p{Lu}\\p{Ll} \']{2,}$', 'u'))
    const nameChangeHandler = (e) => {
        setNameField({...nameField, value: e.target.value, isValid: !!e.target.value.match(re)})
    }

    const emailChangeHandler = (e) => {
        setEmailField({...emailField, value: e.target.value, isValid: !!e.target.value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)})
    }

    const messageChangeHandler = (e) => {
        setMessageField({...messageField, value: e.target.value, isValid: e.target.value.length > 10})
    }

    const submitHandler = (e) => {
        if(!nameField.isValid || !emailField.isValid || !messageField.isValid) {
            e.preventDefault()
            setNameField({...nameField, isTouched: true})
            setEmailField({...emailField, isTouched: true})
            setMessageField({...messageField, isTouched: true})
        }
    }

    return (
        <form action={process.env.NEXT_PUBLIC_TG_URL} method={'POST'} className={classes.form}>
            <label className={`${classes.item}  ${!nameField.isValid && nameField.isTouched && classes.error}`}>

                <div className={classes.label}>
                    <span>Your name:</span>
                    {!nameField.isValid && nameField.isTouched && <span className={classes.errorMessage}>Name should be at least 3 characters</span>}
                </div>
                <input className={classes.inputText} type="text" name={'name'} required
                       value={nameField.value}
                       onChange={nameChangeHandler}
                       onBlur={() => {setNameField({...nameField, isTouched: true})}}
                />
            </label>
            <label className={`${classes.item}  ${!emailField.isValid && emailField.isTouched && classes.error}`}>
                <div className={classes.label}>
                    <span>E-mail:</span>
                    {!emailField.isValid && emailField.isTouched && <span className={classes.errorMessage}>E-mail should be correct</span>}
                </div>
                <input className={classes.inputText} type="text" name={'email'} required
                       value={emailField.value}
                       onChange={emailChangeHandler}
                       onBlur={() => {setEmailField({...emailField, isTouched: true}); console.log(emailField)}}
                />
            </label>
            <label className={`${classes.item}  ${!messageField.isValid && messageField.isTouched && classes.error}`}>
                <div className={classes.label}>
                    <span>Message:</span>
                    {!messageField.isValid && messageField.isTouched && <span className={classes.errorMessage}>Message should be at least 10 characters</span>}
                </div>
                <textarea className={classes.inputTextarea} name={'message'} cols="30" rows="10" required
                          value={messageField.value}
                          onChange={messageChangeHandler}
                          onBlur={() => {setMessageField({...messageField, isTouched: true})}}
                />
            </label>
            <button className={classes.button} onClick={submitHandler}>Send</button>
        </form>
    )
}