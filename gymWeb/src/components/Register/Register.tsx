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
  const [email, setEmail] = useState('');
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

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
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
    setEmail('');
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
        <label htmlFor="dateOfBirthYear">Año de Nacimiento:</label>
        <select id="dateOfBirthYear" name="year" value={dateOfBirth.year} onChange={handleYearChange} required>
          <option value="">Año</option>
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="dateOfBirthMonth">Mes de Nacimiento:</label>
        <select id="dateOfBirthMonth" name="month" value={dateOfBirth.month} onChange={handleMonthChange} required>
          <option value="">Mes</option>
          {months.map((month, index) => (
            <option key={index} value={month}>
              {month}
            </option>
          ))}
        </select>
      </div>
      {dateOfBirth.month && dateOfBirth.year && (
        <div>
          <label htmlFor="dateOfBirthDay">Día de Nacimiento:</label>
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
      )}
      <div>
        <label htmlFor="email">Correo Electrónico:</label>
        <input type="email" id="email" value={email} onChange={handleEmailChange} required />
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
