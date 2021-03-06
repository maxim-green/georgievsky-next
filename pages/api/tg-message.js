export default async function telegramMessage(req, res) {
    try {
        const token = process.env.TG_BOT_TOKEN
        const chadId = process.env.TG_CHAT_ID

        const {name, email, message} = req.body
        const tgMessage = `Сообщение от клиента\nИмя: ${name}\nE-mail: ${email}\nСообщение: ${message}`
        const URI = encodeURI(`https://api.telegram.org/bot${token}/sendMessage?chat_id=${chadId}&parse_mode=html&text=${tgMessage}`)
        if (req.method === 'POST') {
            await fetch(URI)
        }
        res.status(200).redirect('/contact-success')
    } catch(e) {
        res.status(500).end('Something went wrong.')
    }
}