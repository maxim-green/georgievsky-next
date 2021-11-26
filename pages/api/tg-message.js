export default async function telegramMessage(req, res) {
    try {
        const token = '2104347668:AAF45IdxUvqE5y0JwRuwtBY0w9z9QDvSEHE'
        const chadId = '322590362'

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