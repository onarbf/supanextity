const withNextIntl = require('next-intl/plugin')(
  'app/utils/messages.ts'
);
 
module.exports = withNextIntl({
  // Other Next.js configuration ...
});