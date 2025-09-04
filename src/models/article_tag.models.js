import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Article_Tag = sequelize.define("Article_Tag", {
  article_id: {
    type: DataTypes.INTEGER,
    references: {
      model: "articles",
      key: "id"
    },
    onDelete: "CASCADE"
  },
  tag_id: {
    type: DataTypes.INTEGER,
    references: {
      model: "tags",
      key: "id"
    },
    onDelete: "CASCADE"
  }
}, {
  timestamps: true
});

export default Article_Tag;
//modelo intermedio para la relacion muchos a muchos entre article y tag