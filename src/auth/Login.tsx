import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useMainState from '../hooks/useMainState';

export default function Login() {
    const [credentials, setCredentials] = useState({ emailOrPhone: '', password: '', role: '' });
    const navigate = useNavigate();

    const {setSidebar} = useMainState();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setCredentials(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const { emailOrPhone, password, role } = credentials;
        if (emailOrPhone && password && role) {
            switch (role) {
                case 'student':
                    navigate('/student');
                    console.log()
                    setSidebar("student")
                    break;
                case 'teacher':
                    navigate('/teacher');
                    setSidebar("teacher")

                    break;
                case 'parent':
                    navigate('/parent');
                    setSidebar("parent")

                    break;
                case 'personnel':
                    navigate('/admin');
                    setSidebar("personnel")
                    break;
                default:
                    navigate('/');
                    break;
            }
        } else {
            console.log('Please fill in all fields');
        }
    };

    return (
        <>
            <div className="max-w-md mx-auto p-6">
                <div className="bg-white shadow-md rounded-lg p-6">
                    <div className="text-center">
                        <img
                            className="mx-auto w-32"
                            src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                            alt="logo"
                        />
                        <h4 className="my-4 text-xl font-semibold">Login</h4>
                    </div>

                    <form className="space-y-4 flex flex-col items-center gap-6" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="emailOrPhone"
                            placeholder="Email or Phone Number"
                            className="block outline-none w-full px-4 py-2 rounded border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50 transition-colors duration-300"
                            value={credentials.emailOrPhone}
                            onChange={handleChange}
                        />
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            className="block w-full px-4 py-2 rounded border-gray-300 shadow-sm focus:border-primary focus:ring outline-none focus:ring-primary focus:ring-opacity-50 transition-colors duration-300"
                            value={credentials.password}
                            onChange={handleChange}
                        />
                        <select
                            name="role"
                            className="block w-full px-4 py-2 rounded border-gray-300 shadow-sm focus:border-primary focus:ring outline-none focus:ring-primary focus:ring-opacity-50 transition-colors duration-300"
                            value={credentials.role}
                            onChange={handleChange}
                        >
                            <option value="" disabled selected>I am</option>
                            <option value="student">Student</option>
                            <option value="teacher">Teacher</option>
                            <option value="parent">Parent</option>
                            <option value="personnel">Personnel</option>
                        </select>
                        
                        <button
                            className="bg-[#0B5CFF] w-32 text-white rounded-sm hover:bg-[#0B5CFF]/90 py-2 transition-colors duration-300"
                            type="submit"
                        >
                            Log in
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}
