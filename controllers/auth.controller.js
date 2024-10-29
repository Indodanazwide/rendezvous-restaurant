import db from '../database/db.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

export const signup = async (req, res) => {
    const { name, surname, username, email, password, role } = req.body

    try {
        if (!['admin', 'customer'].includes(role)) {
            return res.status(400).json({ error: 'Invalid user role' })
        }

        const hashedPassword = await bcrypt.hash(password, 10)

        const [user] = await db.execute( 'INSERT INTO Users (name, surname, username, email, password, role) VALUES (?, ?, ?, ?, ?, ?)', [ name, surname, username, email, hashedPassword, role ])

        const token = jwt.sign({ id: user.insertId, role: role }, process.env.JWT_SECRET, { expiresIn: '1h' })

        res.status(201).json({
            message: 'User created successfully',
            token,
            id: user.insertId,
            role: role
        })

    } catch (error) {
        if (error.code == 'ER_DUP_ENTRY') {
            res.status(409).json({ error: 'Username or email already exists' })
        } else {
            console.error(error)
            res.status(500).json({
                error: `Error occured while signing up the user ${error}`
            })
        }
    }
}

export const login = async (req, res) => {
    const { username, password } = req.body
    
    try {
        const [result] = await db.execute('SELECT * FROM Users WHERE username = ?', [username])

        if (result.length === 0) {
            return res.status(401).json({ error: 'Invalid username' });
        }

        const user = result[0]

        const passwordMatch = await bcrypt.compare(password, user.password)

        if (!passwordMatch) {
            return res.status(401).json({ error: 'Invalid password' });
        }

        const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h'})

        res.status(200).json({
            message: 'Login successful',
            token,
            user: {
                id: user.id,
                name: user.name,
                surname: user.surname,
                username: user.username,
                email: user.email,
                role: user.role
            }
        })
        
    } catch (error) {
        console.error(error)
        res.status(500).json({
            error: `Error occured while logging the user ${error}`
        })
    }
}