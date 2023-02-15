import client from '../sanity/@sanity/client';

export default client({
  projectId: 'rmedmi37',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2023-02-15',
});
