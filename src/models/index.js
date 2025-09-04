//tengo que importan todos los modelos y realizar las relaciones(lo hago en este archivo index para que no me genere conflicto, solo esta vez ya que no tengo muchos archivos, sino lo realizo como lo demostró el prof)
import UserModel from './user.models.js';
import ArticleModel from './article.models.js';
import Article_Tag from './article_tag.models.js';
import TagModel from './tag.models.js';
import ProfileModel from './profile.models.js';

//relacion uno a uno con user y profile, UN USUARIO PUEDE TENER UN SOLO PERFIL
UserModel.hasOne(ProfileModel, {foreignKey: 'user_id', as: 'profile'});
ProfileModel.belongsTo(UserModel, { foreignKey: 'user_id', as: 'profile' })

//relacion uno a muchos con user y article, UN USUARIO PUEDE TENER MUCHOS ARTICULOS
UserModel.hasMany(ArticleModel, { foreignKey: 'user_id', as: 'articles' });
ArticleModel.belongsTo(UserModel, { foreignKey: 'user_id', as: 'user' });

//relacion muchos a muchos con article y tag
// Modelo Article
ArticleModel.belongsToMany(TagModel, {
  through: Article_Tag,
  foreignKey: 'article_id',
  otherKey: 'tag_id'
});

// Modelo Tag
TagModel.belongsToMany(ArticleModel, {
  through: Article_Tag,
  foreignKey: 'tag_id',     // La columna que apunta a la etiqueta
  otherKey: 'article_id'    // La columna que apunta al artículo
});


export { UserModel, ArticleModel, Article_Tag, TagModel, ProfileModel };