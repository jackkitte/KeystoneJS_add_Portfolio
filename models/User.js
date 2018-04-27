var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * User Model
 * ==========
 */
var User = new keystone.List('User');

User.add({
  name: { type: Types.Name, required: true, index: true },
  email: { type: Types.Email, initial: true, required: true, unique: true, index: true },
  image: { type: Types.CloudinaryImage },
  hobby: { type: Types.Textarea, height: 200 },
  skillset: { type: Types.Key, separator: ' ', index: true },
  description: { type: Types.Markdown, toolbarOptions: { hiddenButtons: '' }, height: 400 },
  password: { type: Types.Password, initial: true, required: true },
}, 'Permissions', {
  isAdmin: { type: Boolean, label: 'Can access Keystone', index: true },
});

// Provide access to Keystone
User.schema.virtual('canAccessKeystone').get(function () {
  return this.isAdmin;
});


/**
 * Relationships
 */
User.relationship({ ref: 'Post', path: 'posts', refPath: 'author' });


/**
 * Registration
 */
User.defaultColumns = 'name, email, isAdmin';
User.register();
