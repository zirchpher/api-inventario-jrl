import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config/database';

// Definimos la interfaz para los atributos de la categoría
interface CategoryAttributes {
  id: number;
  name: string;
}

// Definimos una interfaz para los atributos opcionales al crear una nueva categoría
interface CategoryCreationAttributes extends Optional<CategoryAttributes, 'id'> {}

// Creamos el modelo de categoría
const Category = sequelize.define<Model<CategoryAttributes, CategoryCreationAttributes>>(
  'Category',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  }
);

export default Category;
