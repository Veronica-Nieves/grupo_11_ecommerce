
/* ----------DEFINIMOS EL MODELO DE PRODUCTOS----------- */

module.exports = (sequelize, dataTypes) => {

    let alias = 'products';

    let cols = {
            id: {
                type: dataTypes.INTEGER,
                primaryKey: true,
                allowNull: false,
                autoIncrement: true
            },
            sku: {
                type: dataTypes.STRING(255),
                allowNull: false
            },
            name: {
                type: dataTypes.STRING(255),
                allowNull: false
            },
            description: {
                type: dataTypes.STRING,
                allowNull: false
            },
            image: {
                type: dataTypes.STRING(255),
                allowNull: false
            },
            price: {
                type: dataTypes.FLOAT,
                allowNull: false
            },
            price_offer: {
                type: dataTypes.FLOAT,
                allowNull: false
            },
            specie_id: {
                type: dataTypes.INTEGER,
                allowNull: false
            },
            category_id: {
                type: dataTypes.INTEGER,
                allowNull: false
            },
            offer: {
                type: dataTypes.STRING(255),
                allowNull: false
            },
            featured: {
                type: dataTypes.STRING(255),
                allowNull: false
            },
            pieces: {
                type: dataTypes.INTEGER,
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
        tableName: "products",
        timestamps: false,
        //createdAt: 'created_at',
        //updatedAt: 'updated_at',
        //deletedAt: false
    }

    const Product = sequelize.define(alias, cols, config);

    /* --- RELACIONES DE ESTE MODELO CON OTROS MODELOS --- */
    
    Product.associate = function(models){

    // Cada producto "pertenece a" una especie (N:1)
        Product.belongsTo(models.species, {
            as: "specie", // alias de la relación
            foreignKey: "specie_id",
        });

    // Cada producto "pertenece a" una categoría (N:1)
        Product.belongsTo(models.category, {
            as: "category", // alias de la relación
            foreignKey: "category_id",
        });
    }

    return Product
};