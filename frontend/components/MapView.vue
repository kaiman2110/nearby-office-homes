<script setup lang="ts">

const gmap = ref<HTMLElement>();
const mapInstance = ref<google.maps.Map | null>(null);

// 東京タワーの緯度経度
const defaultMarkerPosition = {
  lat: 35.658581,
  lng: 139.745433,
};
const mapOptions = {
  center: {
    lat: 35.658581,
    lng: 139.745433,
  },
  zoom: 14,
};

const { $googleMaps } = useNuxtApp();

onMounted(async () => {
  const google = await $googleMaps();
  if (google && gmap.value) {
    mapInstance.value = new google.maps.Map(gmap.value, mapOptions);

    // デフォルトのマーカーを表示
    new google.maps.Marker({
      position: defaultMarkerPosition,
      map: mapInstance.value,
      title: 'デフォルトのマーカー',
    });
  }
});
</script>

<template>
  <div class="container">
    <h1>近住物件サーチ(Beta)</h1>
    <div ref="gmap" class="map"/>
    <div class="action-bar"/>
  </div>
</template>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    height: 100vh; /* ビューポート全体の高さを使用 */
}

.map {
    flex: 1; /* 残りのスペースを占める */
}
</style>
