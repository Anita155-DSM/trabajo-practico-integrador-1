import UserModel from './user.models.js';
import ProfileModel from './profile.models.js';
import ArticleModel from './article.models.js';
import TagModel from './tag.models.js';
import ArticleTag from './article_tag.models.js';

// RELACIONES

// 1:1 User - Profile
UserModel.hasOne(ProfileModel, { foreignKey: 'user_id', as: 'profile' });
ProfileModel.belongsTo(UserModel, { foreignKey: 'user_id', as: 'user' });

// 1:N User - Article
UserModel.hasMany(ArticleModel, { foreignKey: 'user_id', as: 'articles' });
ArticleModel.belongsTo(UserModel, { foreignKey: 'user_id', as: 'author' });

// N:M Article - Tag
ArticleModel.belongsToMany(TagModel, { through: ArticleTag, foreignKey: 'article_id', otherKey: 'tag_id', as: 'tags' });
TagModel.belongsToMany(ArticleModel, { through: ArticleTag, foreignKey: 'tag_id', otherKey: 'article_id', as: 'articles' });

export { UserModel, ProfileModel, ArticleModel, TagModel, ArticleTag };