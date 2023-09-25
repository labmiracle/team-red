import { useState } from 'react';
import styles from './contacto.module.css';
import { IUserMail } from '../../interfaces/User.interface';
import { contactoServiceInstance } from '../../services/http/contacto/ContactoService';
const Contacto = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };
    const sendMail = async (user: IUserMail) => {
        try {
            console.log(user);
            await contactoServiceInstance.sendMail(user);

            return;
        } catch (error) {
            console.error('Error de red:', error);
            return;
        }
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        //lógica para enviar el formulario
        console.log(formData);
        const userMail: IUserMail = {
            name: formData.name,
            email: formData.email,
            message: formData.message,
        };
        sendMail(userMail);
        setFormData({
            name: '',
            email: '',
            message: '',
        });
    };

    return (
        <div className={styles.contactForm}>
            <h2>Contacto</h2>
            <form onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                    <label htmlFor='name'>Nombre</label>
                    <input
                        type='text'
                        id='name'
                        name='name'
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor='email'>Correo electrónico</label>
                    <input
                        type='email'
                        id='email'
                        name='email'
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor='message'>Mensaje</label>
                    <textarea
                        id='message'
                        name='message'
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type='submit'>Enviar</button>
            </form>
        </div>
    );
};

export default Contacto;
