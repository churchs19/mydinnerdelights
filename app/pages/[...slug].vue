<script setup>
const { $preview } = useNuxtApp();
const { slug } = useRoute().params;
const url = slug && slug.length > 0 ? slug.join("/") : "home";
const version = $preview ? "draft" : "published";

const { data: story, pending, error } = await useAsyncData(
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

// Unknown slugs come back from Storyblok as a 404; render the error page
// instead of an empty body. Other API failures surface as a 500
if (error.value || !story.value) {
  const notFound = !error.value || error.value.statusCode === 404;
  throw createError({
    statusCode: notFound ? 404 : 500,
    statusMessage: notFound ? "Page not found" : "Something went wrong",
    fatal: true,
  });
}

const siteTitle = "Personal Chef in Des Moines, Iowa | Dinner Delights";
const siteDescription =
  "Dinner Delights offers personal chef services in central Iowa to meet any budget or needs. Meal selections are fully-customized to your taste and dietary needs.";

const title = computed(() =>
  url === "home" ? siteTitle : `${story.value?.name} | Dinner Delights`
);
// Editors can set an optional seo_description field on any story
const description = computed(
  () => story.value?.content?.seo_description || siteDescription
);

useSeoMeta({
  title,
  ogTitle: title,
  description,
  ogDescription: description,
  keywords:
    "food,dinner,meals,personal chef,chef,supper,des moines,iowa,dsm,personal,andrea love,andrea,love",
  author: "Dinner Delights, LLC",
  ogImage: "/android-chrome-512x512.png",
  twitterImage: "/android-chrome-512x512.png",
  locale: "en_US",
  themeColor: "#602650",
});

onMounted(() => {
  if ($preview && story.value && story.value.id) {
    useStoryblokBridge(story.value.id, (evStory) => (story.value = evStory));
  }
});
</script>

<template>
  <StoryblokComponent v-if="pending === false && story" :blok="story.content" />
</template>
