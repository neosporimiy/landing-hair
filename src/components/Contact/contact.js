import React, { useRef, useState } from 'react';
import './contact.css'
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const [isSent, setIsSent] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_oi8sa7h', 'template_a55lef8', form.current, 'fVJ3owApEKK4ft06L')
            .then((result) => {
                console.log(result.text);
                setIsSent(true);
            })
            .catch((error) => {
                console.log(error.text);
            });

        form.current.reset();
    };

    return (
        <section id='contact'>
            <h2 className='contactPageTitle'>Написать мне</h2>
            <p className='centered-text'>Если у Вас есть вопросы, связанные с кератиновым выпрямлением, реконструкцией, ботоксом для волос или капсульным наращиванием, то смело можете задать их с помощью формы ниже.</p>

            <form className='contactForm' ref={form} onSubmit={sendEmail}>
                <input type='text' className='name' placeholder='Имя' name='from_name' required />
                <input type='email' className='email' placeholder='Email' name='from_email' required />
                <textarea className='msg' name='message' rows='5' placeholder='Ваше сообщение' required></textarea>
                <button className='submitBtn'>Отправить</button>
            </form>
            {isSent && <p>Ваше сообщение отправлено!</p>}

        </section>
    );
};

export default Contact;
