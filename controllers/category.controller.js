import db from '../database/db.js'

// Create Category
export const createCategory = async (req, res) => {
    const { name } = req.body

    try {
        const [result] = await db.execute(
            'INSERT INTO Categories (name) VALUES (?)', [name]
        )

        res.status(201).json({
            message: 'Category created successfully',
            categoryId: result.insertId
        })
    } catch (error) {
        if (error.code === 'ER_DUP_ENTRY') {
            res.status(400).json({ error: 'Category name already exists.' });
        } else {
            res.status(500).json({ error: 'An error occurred while creating the category.' });
        }
    }
}

// Get All Categories
export const getCategories = async (req, res) => {
    try {
        const [rows] = await db.execute(`SELECT * FROM Categories ORDER BY created_at DESC`);

        res.status(200).json({ categories: rows });
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while retrieving categories.' });
    }
};

// Update Category
export const updateCategory = async (req, res) => {
    const { id } = req.params;
    const { name } = req.body;

    try {
        const [result] = await db.execute(
            `UPDATE Categories SET name = ? WHERE id = ?`,
            [name, id]
        );

        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Category not found.' });
        }

        res.status(200).json({ message: 'Category updated successfully!' });
    } catch (error) {
        if (error.code === 'ER_DUP_ENTRY') {
            res.status(400).json({ error: 'Category name already exists.' });
        } else {
            res.status(500).json({ error: 'An error occurred while updating the category.' });
        }
    }
};

// Delete Category
export const deleteCategory = async (req, res) => {
    const { id } = req.params;

    try {
        const [result] = await db.execute(
            `DELETE FROM Categories WHERE id = ?`,
            [id]
        );

        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Category not found.' });
        }

        res.status(200).json({ message: 'Category deleted successfully!' });
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while deleting the category.' });
    }
};