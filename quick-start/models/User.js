const keystone = require('keystone');

const User = new keystone.List('User');

User.add({
  displayName: { type: String },
  password: { type: keystone.Field.Types.Password },
  email: { type: keystone.Field.Types.Email, unique: true }
});

// since this User model will be used for logging into the admin UI
// we need to add the property 'canAccessKeystone'
// We are going have a User model that allows all users to access to Keystone
User.schema.virtual('canAccessKeystone').get(() => {
  return true;
});

//  default columns to be displayed in the admin UI.
User.defaultColumns = 'id, displayName, email';
User.register();
