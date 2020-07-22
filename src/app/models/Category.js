const db = require('../../config/db')
const { query } = require('../../config/db')

module.exports = { 
    all() {
        return db.query(`
            SELECT * FROM categories
        `)
        
    }

    
}