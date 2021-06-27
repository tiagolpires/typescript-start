interface ImailTo {
    name: string;
    email: string;
}

interface ImailMessage {
    subject: string;
    body: string;
    attachment?: Array<string>;
}

interface MessageDTO {
    to: ImailTo;
    message: ImailMessage;
}

class EmailService {
    sendMail({ to, message }: MessageDTO) {
        console.log(`Email enviado para ${to.name}: ${message.subject}`)
    }
}

export default EmailService