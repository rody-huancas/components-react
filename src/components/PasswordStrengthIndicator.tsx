import { useState } from 'react';

type StrengthLevel = 'Weak' | 'Medium' | 'Strong';

const getPasswordStrength = (password: string): StrengthLevel => {
  let strengthScore = 0;

  if (password.length >= 8) strengthScore++;
  if (/[A-Z]/.test(password)) strengthScore++;
  if (/[a-z]/.test(password)) strengthScore++;
  if (/[0-9]/.test(password)) strengthScore++;
  if (/[\W_]/.test(password)) strengthScore++;

  if (strengthScore <= 2) return 'Weak';
  if (strengthScore === 3 || strengthScore === 4) return 'Medium';
  return 'Strong';
};

const PasswordStrengthIndicator: React.FC = () => {
  const [password, setPassword] = useState('');
  const [strength, setStrength] = useState<StrengthLevel>('Weak');

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setStrength(getPasswordStrength(newPassword));
  };

  const getStrengthColor = () => {
    switch (strength) {
      case 'Weak':
        return 'bg-red-500';
      case 'Medium':
        return 'bg-yellow-500';
      case 'Strong':
        return 'bg-green-500';
      default:
        return 'bg-gray-300';
    }
  };

  return (
    <div className="w-full max-w-sm mx-auto p-4">
      <div className="mb-4">
        <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
          Contraseña
        </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Introduce una contraseña"
        />
      </div>

      <div className="flex items-center mt-2">
        <span className="text-gray-600 text-sm mr-2">Fortaleza:</span>
        <div className="w-full h-2 bg-gray-200 rounded">
          <div className={`h-full ${getStrengthColor()} rounded`} style={{ width: `${(password.length / 20) * 100}%` }}></div>
        </div>
      </div>

      <p className={`mt-2 text-sm font-semibold ${strength === 'Weak' ? 'text-red-500' : strength === 'Medium' ? 'text-yellow-500' : 'text-green-500'}`}>
        {strength}
      </p>
    </div>
  );
};

export default PasswordStrengthIndicator;
