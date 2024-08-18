<script setup>
const { slug } = useRoute().params;

useSeoMeta({
  title: "Personal Chef in Des Moines, Iowa | Dinner Delights",
  ogTitle: "Personal Chef in Des Moines, Iowa | Dinner Delights",
  description:
    "Dinner Delights offers personal chef services in central Iowa to meet any budget or needs. Meal selections are fully-customized to your taste and dietary needs.",
  ogDescription:
    "Dinner Delights offers personal chef services in central Iowa to meet any budget or needs. Meal selections are fully-customized to your taste and dietary needs.",
  keywords:
    "food,dinner,meals,personal chef,chef,supper,des moines,iowa,dsm,personal,andrea love,andrea,love",
  author: "Dinner Delights, LLC",
  ogImage: "/android-chrome-512x512.png",
  twitterImage: "/android-chrome-512x512.png",
  locale: "en_US",
  themeColor: "#602650",
});

const story = await useAsyncStoryblok(
  slug && slug.length > 0 ? slug.join("/") : "home",
  { version: "draft" }
);
</script>

<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
</template>
