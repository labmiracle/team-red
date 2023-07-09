import React, { useState, ChangeEvent, FormEvent } from 'react';

interface DateOfBirth {
  day: string;
  month: string;
  year: string;
}

const Register: React.FC = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dni, setDNI] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState<DateOfBirth>({
    day: '',
    month: '',
    year: '',
  });
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [dniError, setDNIError] = useState('');
  const [isDateValid, setIsDateValid] = useState(true);

  const handleFirstNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setLastName(event.target.value);
  };

  const handleDNIChange = (event: ChangeEvent<HTMLInputElement>) => {
    const dniValue = event.target.value;
    if (dniValue.length <= 8) {
      setDNI(dniValue);
      setDNIError('');
    } else {
      setDNIError('Por favor, ingrese 8 dígitos para su DNI sin puntos');
    }
  };

  const handleDateOfBirthChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    const parsedValue = name === 'year' ? parseInt(value, 10) : value;
    setDateOfBirth((prevState) => ({
      ...prevState,
      [name]: parsedValue,
    }));
  };

  const handleAddressChange = (event: ChangeEvent<HTMLInputElement>) => {
    setAddress(event.target.value);
  };

  const handleCityChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCity(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Agregar la lógica para enviar los datos del formulario al servidor
    // Podemos hacer una llamada a una API para registrar al usuario.

    setFirstName('');
    setLastName('');
    setDNI('');
    setDateOfBirth({
      day: '',
      month: '',
      year: '',
    });
    setAddress('');
    setCity('');
    setDNIError('');
    setIsDateValid(true);
  };

  const days = Array.from({ length: 31 }, (_, index) => index + 1);

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

  const years = Array.from({ length: 94 }, (_, index) => 2023 - index);

  const validateDateOfBirth = () => {
    const { day, month, year } = dateOfBirth;
    const selectedMonth = months.indexOf(month);
    const selectedDate = new Date(parseInt(year), selectedMonth, parseInt(day)).getDate();

    setIsDateValid(selectedDate === parseInt(day, 10));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="firstName">Nombre:</label>
        <input type="text" id="firstName" value={firstName} onChange={handleFirstNameChange} required />
      </div>
      <div>
        <label htmlFor="lastName">Apellido:</label>
        <input type="text" id="lastName" value={lastName} onChange={handleLastNameChange} required />
      </div>
      <div>
        <label htmlFor="dni">DNI:</label>
        <input type="text" id="dni" value={dni} onChange={handleDNIChange} required />
        {dniError && <p>{dniError}</p>}
      </div>
      <div>
        <label htmlFor="dateOfBirthDay">Fecha de Nacimiento:</label>
        <select
          id="dateOfBirthDay"
          name="day"
          value={dateOfBirth.day}
          onChange={handleDateOfBirthChange}
          onBlur={validateDateOfBirth}
          required
        >
          <option value="">Día</option>
          {days.map((day) => (
            <option key={day} value={day}>
              {day}
            </option>
          ))}
        </select>
        <select
          id="dateOfBirthMonth"
          name="month"
          value={dateOfBirth.month}
          onChange={handleDateOfBirthChange}
          onBlur={validateDateOfBirth}
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
          id="dateOfBirthYear"
          name="year"
          value={dateOfBirth.year}
          onChange={handleDateOfBirthChange}
          onBlur={validateDateOfBirth}
          required
        >
          <option value="">Año</option>
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
        {!isDateValid && <p>Fecha de Nacimiento inválida.</p>}
      </div>
      <div>
        <label htmlFor="address">Dirección:</label>
        <input type="text" id="address" value={address} onChange={handleAddressChange} required />
      </div>
      <div>
        <label htmlFor="city">Ciudad:</label>
        <input type="text" id="city" value={city} onChange={handleCityChange} required />
      </div>
      <button type="submit" disabled={!isDateValid}>
        Registrarse
      </button>
    </form>
  );
};

export default Register;
