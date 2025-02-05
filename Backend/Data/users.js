// This file contains the data for the dummy users for the production phase.
import bcrypt from 'bcryptjs';

const users = [
    {
        name: 'Omit Kumar',
        email: 'admin@email.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true,
    },
    {
        name: 'Bittu',
        email: 'b2@email.com',
        password: bcrypt.hashSync('12341234', 10),
        isAdmin: false,
    },
    {
        name: 'Rajesh',
        email: 'rajesh@email.com',
        password: bcrypt.hashSync('28032803', 10),
        isAdmin: false,
    },
]

export default users;