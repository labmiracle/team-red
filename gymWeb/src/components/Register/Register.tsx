import { useState, ChangeEvent, FormEvent } from 'react';
import styles from './Register.module.css';

interface DateOfBirth {
  day: string;
  month: string;
  year: string;
}

const Register: React.FC = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dni, setDNI] = useState('');
  const [dniError, setDNIError] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState<DateOfBirth>({
    day: '',
    month: '',
    year: '',
  });
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [userName, setUserName] = useState('');
  const [userNameError, setUserNameError] = useState('');
  
  
  const handleFirstNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (value.length <= 45) {
      setFirstName(value);
    }
  };

  const handleLastNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (value.length <= 45) {
      setLastName(value);
    }
  };

  const handleDNIChange = (event: ChangeEvent<HTMLInputElement>) => {
    const dniValue = event.target.value;

    if (dniValue.length <= 8) {
      setDNI(dniValue);

      if (dniValue.length === 8) {
        if (/^\d{8}$/.test(dniValue)) {
          setDNIError('');
        } else {
          setDNIError('Ingrese los 8 números de su D.N.I. sin puntos');
        }
      } else {
        setDNIError('');
      }
    }
  };

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    const emailValue = event.target.value;
    setEmail(emailValue);
    
    if (emailValue.length > 0) {
      if (/^\S+@\S+\.\S+$/.test(emailValue)) {
        setEmailError('');
      } else {
        setEmailError('Ingrese una dirección de correo electrónico válida');
      }
    } else {
      setEmailError('');
    }
  };
  

  const handleYearChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    setDateOfBirth((prevState) => ({
      ...prevState,
      year: value,
    }));
  };

  const handleMonthChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    setDateOfBirth((prevState) => ({
      ...prevState,
      month: value,
    }));
  };

  const handleDateOfBirthChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    setDateOfBirth((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handlePhoneNumberChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (/^\d{0,10}$/.test(value)) {
      setPhoneNumber(value);
    }
  };

  const handleAddressChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (value.length <= 70) {
      setAddress(value);
    }
  };
  const handleCityChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (value.length <= 70) {
      setCity(value);
    }
  };

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (value.length <= 15) {
    setPassword(value)};

  
    if (value.length < 8 || value.length > 15) {
      setPasswordError('La contraseña debe tener entre 8 y 15 caracteres');
    } else {
      setPasswordError('');
    }
  };

  const handleUserNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (value.length <= 15) {
    setUserName(value)};

  
    if (value.length < 8 || value.length > 15) {
      setUserNameError('El usuario debe tener entre 5 y 15 caracteres');
    } else {
      setUserNameError('');
    }
  };



  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Agregar la lógica para enviar los datos del formulario al servidor
    const userData = {
      firstName,
      lastName,
      dni,
      email,
      dateOfBirth,
      phoneNumber,
      address,
      city,
      password, 
    };

    // enviar la info de userDaa al backend
  
    setFirstName('');
    setLastName('');
    setDNI('');
    setEmail('');
    setDateOfBirth({
      day: '',
      month: '',
      year: '',
    });
    setPhoneNumber('');

    setAddress('');
    setCity('');
    setPassword('');
    setDNIError('');
    setEmailError('');
  
  };

  const daysInMonth = (month: number, year: number) => {
    return new Date(year, month, 0).getDate();
  };

  const years = Array.from({ length: 94 }, (_, index) => 2023 - index);

  const months = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre',
  ];

  const days = dateOfBirth.month && dateOfBirth.year ? Array.from(
    { length: daysInMonth(months.indexOf(dateOfBirth.month) + 1, parseInt(dateOfBirth.year, 10)) },
    (_, index) => index + 1
  ) : [];

  return (
    <form className={styles.registerContainer} onSubmit={handleSubmit}>
      <h2>Formulario de Registro</h2>
      <div className={styles.formGroup}>
        <label htmlFor="firstName">Nombre:</label>
        <div className={styles.inputContainer}>
          <input type="text" id="firstName" value={firstName} onChange={handleFirstNameChange} required />
        </div>
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="lastName">Apellido:</label>
        <div className={styles.inputContainer}>
          <input type="text" id="lastName" value={lastName} onChange={handleLastNameChange} required />
        </div>
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="dni">D.N.I.:</label>
        <div className={styles.inputContainer}>
          <input type="text" id="dni" value={dni} onChange={handleDNIChange} required />
        </div>
        {dniError && <p className={styles.errorMessage}>{dniError}</p>}
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="dateOfBirthYear">Fecha de Nacimiento:</label>
        <div className={styles.selectContainer}>
        <select
          id="dateOfBirthYear"
          name="year"
          value={dateOfBirth.year}
          onChange={handleYearChange}
          required
        >
          <option value="">Año</option>
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
        <select
          id="dateOfBirthMonth"
          name="month"
          value={dateOfBirth.month}
          onChange={handleMonthChange}
          required
        >
          <option value="">Mes</option>
          {months.map((month, index) => (
            <option key={index} value={month}>
              {month}
            </option>
          ))}
        </select>
        <select
          id="dateOfBirthDay"
          name="day"
          value={dateOfBirth.day}
          onChange={handleDateOfBirthChange}
          required
        >
          <option value="">Día</option>
          {days.map((day) => (
            <option key={day} value={day}>
              {day}
            </option>
          ))}
        </select>
        </div>
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="phoneNumber">Número de Teléfono:</label>
        <div className={styles.inputContainer}>
          <input type="text" id="phoneNumber" value={phoneNumber} onChange={handlePhoneNumberChange} required />
        </div>
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="email">Correo Electrónico:</label>
        <div className={styles.inputContainer}>
          <input type="email" id="email" value={email} onChange={handleEmailChange} onBlur={handleEmailChange} required />
        </div>
        {emailError && <p className={styles.errorMessage}>{emailError}</p>}
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="address">Dirección:</label>
        <div className={styles.inputContainer}>
          <input type="text" id="address" value={address} onChange={handleAddressChange} required />
        </div>
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="city">Ciudad:</label>
        <div className={styles.inputContainer}>
          <input type="text" id="city" value={city} onChange={handleCityChange} required />
        </div>
      </div>
      
      <div className={styles.formGroup}>
        <label htmlFor="userName">Nombre de Usuario:</label>
        <div className={styles.inputContainer}>
          <input type="text" id="userName" value={userName} onChange={handleUserNameChange} required/>
        </div>
        {userNameError && <p className={styles.errorMessage}>{userNameError}</p>}
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="password">Contraseña:</label>
        <div className={styles.inputContainer}>
          <input type="password" id="password" value={password} onChange={handlePasswordChange} required/>
        </div>
        {passwordError && <p className={styles.errorMessage}>{passwordError}</p>}
      </div>
      
      <button type="submit">
        Registrarse
      </button>
    </form>
  );
}

export default Register;