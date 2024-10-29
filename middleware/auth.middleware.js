import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

export const authenticate = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1]

    try {
        if (!token) {
            return res.status(401).json({ error: 'Access denied. No token provided.' });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        req.user = decoded;
        next();
    } catch (error) {
        if (error.name === 'TokenExpiredError') {
            return res.status(401).json({ error: 'Token expired. Please log in again.' });
        }
        res.status(400).json({ error: 'Invalid token.' });
    }
}

export const authorizeRoles = (...allowedRoles) => {
    return (req, res, next) => {
        if (!req.user || !allowedRoles.includes(req.user.role)) {
            return res.status(403).json({ 
                error: 'Access denied. You do not have permission to access this resource.',
                user: req.user?.role // Use req.user?.role to ensure role is accessed safely
            });
        }
        next();
    }
};
