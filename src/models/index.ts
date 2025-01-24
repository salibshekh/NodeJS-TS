import sequelize from '../utils/sequelize';
import { UserModel } from './user';
import { PostModel } from './post';

const User = UserModel(sequelize);
const Post = PostModel(sequelize);

User.hasMany(Post, { foreignKey: 'userId' });
Post.belongsTo(User, { foreignKey: 'userId' });

export { User, Post };
