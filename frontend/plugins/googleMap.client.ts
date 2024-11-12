import { Loader } from '@googlemaps/js-api-loader';

export default defineNuxtPlugin(() => {
  let googleInstance: typeof google | null = null;

  const loadGoogleMaps = async () => {
    if (!googleInstance) {
      const config = useRuntimeConfig();
      const loader = new Loader({
        apiKey: config.public.googleMapsApiKey,
        version: 'weekly',
        libraries: ['places'],
      });
      googleInstance = await loader.load();
    }
    return googleInstance;
  };

  return {
    provide: {
      googleMaps: loadGoogleMaps,
    },
  };
});
