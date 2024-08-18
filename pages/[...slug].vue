<script setup>
const { $preview } = useNuxtApp();
const { slug } = useRoute().params;
const url = slug && slug.length > 0 ? slug.join("/") : "home";
const version = $preview ? "draft" : "published";

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

const { data: story, pending } = await useAsyncData(
  `${url}`,

  async () => {
    const { data } = await useStoryblokApi().get(
      `cdn/stories/${url.replace(/\/$/, "")}`,
      {
        version,
      }
    );

    return data?.story;
  }
);

onMounted(() => {
  if ($preview && story.value && story.value.id) {
    useStoryblokBridge(story.value.id, (evStory) => (story.value = evStory));
  }
});
</script>

<template>
  <StoryblokComponent v-if="pending === false && story" :blok="story.content" />
</template>
