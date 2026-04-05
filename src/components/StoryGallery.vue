<script setup>
import { ref, onMounted } from "vue";
import { supabase } from "../lib/supabaseClient";

const stories = ref([]);
const loading = ref(true);

const fetchStories = async () => {
  loading.value = true;
  const { data, error } = await supabase
    .from("stories")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching stories:", error.message);
  } else {
    stories.value = data;
  }
  loading.value = false;
};

onMounted(fetchStories);
</script>

<template>
  <div class="gallery-page">
    <div class="content-wrapper">
      <h1>The Fabric of Our Stories</h1>

      <div v-if="loading" class="loader">Unrolling the fabric...</div>

      <div v-else class="story-grid">
        <div v-for="story in stories" :key="story.id" class="story-card">
          <p class="story-text">{{ story.content }}</p>
          <span class="date">{{
            new Date(story.created_at).toLocaleDateString()
          }}</span>
        </div>
      </div>

      <router-link to="/" class="back-link">← Back to Home</router-link>
    </div>
  </div>
</template>

<style scoped>
/* 1. The main background wrapper */
.gallery-page {
  min-height: 100vh;
  width: 100%; /* No 100vw, which prevents horizontal scroll/pushing right */
  background-color: #f8f4ff;
  padding: 60px 0;
  box-sizing: border-box;

  /* Dead-center horizontal alignment */
  display: flex;
  justify-content: center;
}

/* 2. The invisible column holding everything */
.content-wrapper {
  width: 90%;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center; /* Centers the title and the bottom button */
}

/* 3. Typography & Spacing */
h1 {
  color: #0c0c0c;
  margin-top: 0;
  margin-bottom: 40px;
  text-align: center;
}

.story-grid {
  display: flex;
  flex-direction: column;
  gap: 25px;
  width: 100%;
  margin-bottom: 50px; /* Gives space before the back button */
}

.story-card {
  background: #f1ece1;
  padding: 30px;
  border-radius: 0.75em;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  width: 100%;
  box-sizing: border-box;
}

.story-text {
  font-size: 1.1rem;
  line-height: 1.6;
  color: #0c0c0c;
  white-space: pre-wrap;
  margin: 0;
}

.date {
  display: block;
  margin-top: 20px;
  font-size: 0.85rem;
  color: #8a8475;
  text-align: right;
  font-style: italic;
}

/* 4. Styled Bottom Button */
.back-link {
  display: inline-block;
  padding: 15px 30px;
  background-color: #0c0c0c;
  color: white;
  text-decoration: none;
  border-radius: 8px;
  font-size: 1.1rem;
  transition: transform 0.1s ease, opacity 0.2s;
}

.back-link:hover {
  opacity: 0.9;
  transform: scale(1.02);
}

.loader {
  font-size: 1.2rem;
  color: #666;
  margin-top: 50px;
}
</style>
