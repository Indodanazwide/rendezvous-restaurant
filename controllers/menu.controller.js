import db from '../database/db.js'

// Create Menu Item
export const createMenuItem = async (req, res) => {
    const { name, description, image, price, category_id } = req.body;

    try {
        const [result] = await db.execute(
            `INSERT INTO Menu (name, description, image, price, category_id) VALUES (?, ?, ?, ?, ?)`,
            [name, description, image, price, category_id]
        );

        res.status(201).json({ message: 'Menu item created successfully!', menuItemId: result.insertId });
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while creating the menu item.' });
    }
};

// Get All Menu Items
export const getMenuItems = async (req, res) => {
    try {
        const [rows] = await db.execute(`
            SELECT Menu.*, Categories.name AS category_name 
            FROM Menu 
            LEFT JOIN Categories ON Menu.category_id = Categories.id 
            ORDER BY created_at DESC
        `);

        res.status(200).json({ menuItems: rows });
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while retrieving menu items.' });
    }
};

// Update Menu Item
export const updateMenuItem = async (req, res) => {
    const { id } = req.params;
    const { name, description, image, price, category_id } = req.body;

    try {
        const [result] = await db.execute(
            `UPDATE Menu SET name = ?, description = ?, image = ?, price = ?, category_id = ? WHERE id = ?`,
            [name, description, image, price, category_id, id]
        );

        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Menu item not found.' });
        }

        res.status(200).json({ message: 'Menu item updated successfully!' });
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while updating the menu item.' });
    }
};

// Delete Menu Item
export const deleteMenuItem = async (req, res) => {
    const { id } = req.params;

    try {
        const [result] = await db.execute(
            `DELETE FROM Menu WHERE id = ?`,
            [id]
        );

        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Menu item not found.' });
        }

        res.status(200).json({ message: 'Menu item deleted successfully!' });
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while deleting the menu item.' });
    }
};
