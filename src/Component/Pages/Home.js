import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';

const Home = () => {
    const [ users, setUsers] = useState([]);

    useEffect(() => {
        loadUser();
    }, [])

    const loadUser = async () => {
        const result = await axios.get("http://localhost:3001/users");
        setUsers(result.data);
    }

    const deleteUser = async id => {
        await axios.delete(`http://localhost:3001/users/${id}`)
        loadUser();
    }
    return (
        <div className='container'>
            <h1>Home page</h1>
            <table className="table">
                <thead>
                    <tr className='bg-dark text-white'>
                    <th scope="col">S/N</th>
                    <th scope="col">Name</th>
                    <th scope="col">User Name</th>
                    <th scope="col">Emails</th>
                    <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr>
                            <th scope='row'>{index + 1}</th>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>
                                <Link className='btn btn-primary m-2' to={`/user/${user.id}`}><i className='fa fa-eye'></i></Link>
                                <Link className='btn btn-outline-primary m-2' to={`/user/edit/${user.id}`}>Edit</Link>
                                <Link className='btn btn-danger m-2' onClick={() => deleteUser(user.id)}>Delete</Link> 
                            </td>
                        </tr>
                    ))}
                </tbody>
             </table>
        </div>
    );
}

export default Home;