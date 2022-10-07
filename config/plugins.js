// path: ./config/plugins.js

module.exports = ({ env }) => ({
    // ...
    upload: {
      config: {
        provider: 'aws-s3', // For community providers pass the full package name (e.g. provider: 'strapi-provider-upload-google-cloud-storage')
        providerOptions: {
          accessKeyId: env('AKIAY4Q32CNGFFCR747U'),
          secretAccessKey: env('qKpFnD1oXoJNDOLM6IJi3JAnN+zTzaVKTNLE2g2v'),
          region: env('US West (N. California) us-west-1'),
          params: {
            Bucket: env('strapiv1storage'),
          },
        },
      },
    },
    // ..
  });
