import classes from '../styles/ContactForm.module.scss'

export default function ContactForm() {
    return (
        <form action={process.env.NEXT_PUBLIC_TG_URL} method={'POST'} className={classes.form}>
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