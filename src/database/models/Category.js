
/* ----------DEFINIMOS EL MODELO DE CATEGORIAS----------- */
module.exports = (sequelize, dataTypes) => {

    let alias = 'category';

    let cols = {
            id: {
                type: dataTypes.INTEGER,
                primaryKey: true,
                allowNull: false,
                autoIncrement: true
            },
            name: {
                type: dataTypes.STRING(250),
                allowNull: false
            },
            /*created_at: {
                type: dataTypes.DATE,
            },
            updated_at: {
                type: dataTypes.DATE,
            }*/
        };
    let config = {
        tableName: "categories",
        timestamps: false,
        //createdAt: 'created_at',
        //updatedAt: 'updated_at',
        //deletedAt: false
    }

    const Category = sequelize.define(alias, cols, config);
    
    /* --- RELACIONES DE ESTE MODELO CON OTROS MODELOS --- */

    // Cada especie tiene asociada muchos products (1:N)
    Category.associate = function(models){
        Category.hasMany(models.products, {
            as: "products", // alias de la relación
            foreignKey: "category_id",
        });
    }

    return Category
};