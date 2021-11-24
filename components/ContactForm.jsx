import classes from '../styles/ContactForm.module.scss'

const ContactForm = () => {
    return (
        <form action={'http://localhost:3000/api/tg-message'} method={'POST'} className={classes.form}>
            <label className={classes.item}>
                <div className={classes.label}>Your name:</div>
                <input className={classes.inputText} type="text" name={'name'} required/>
            </label>
            <label className={classes.item}>
                <div className={classes.label}>E-mail:</div>
                <input className={classes.inputText} type="text" name={'email'} required/>
            </label>
            <label className={classes.item}>
                <div className={classes.label}>Message:</div>
                <textarea className={classes.inputTextarea} name={'message'} cols="30" rows="10" required/>
            </label>
            <button className={classes.button}>Send</button>
        </form>
    )
}

export default ContactForm