<script setup>
import { ref } from "vue";
import { supabase } from "../lib/supabaseClient"; // Import the client
import { useRouter } from "vue-router";

const userStory = ref("");
const isSending = ref(false);
const router = useRouter();

const submitStory = async () => {
  if (!userStory.value.trim()) return;

  isSending.value = true;

  // Insert the story into the "stories" table
  const { error } = await supabase
    .from("stories")
    .insert([{ content: userStory.value }]);

  if (error) {
    alert("Error saving story: " + error.message);
  } else {
    alert("Your ending has been succesfully submitted!");
    userStory.value = "";
    router.push("/"); // Send them back to the home page
  }

  isSending.value = false;
};
</script>

<template>
  <div class="submission-page">
    <div class="card">
      <h1>Write Your Ending</h1>
      <textarea
        v-model="userStory"
        :disabled="isSending"
        placeholder="How does the story end?..."
      ></textarea>

      <button @click="submitStory" class="submit-btn" :disabled="isSending">
        {{ isSending ? "Submitting..." : "Submit Story" }}
      </button>

      <router-link to="/" class="back-link">← Go Back</router-link>
    </div>
  </div>
</template>

<style scoped>
.submission-page {
  /* Use fixed or absolute to ensure it covers the whole viewport regardless of parents */
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center; /* Horizontal center */
  align-items: center; /* Vertical center */
  background-color: #f8f4ff;
  box-sizing: border-box;
}

.card {
  background: #f1ece1;
  padding: 40px;
  border-radius: 0.75em;
  width: 90%; /* Responsive width */
  max-width: 600px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05); /* Optional: adds some depth */
}

h1 {
  text-align: center;
  margin: 0;
  color: #0c0c0c;
}

textarea {
  width: 100%;
  height: 300px;
  padding: 15px;
  border-radius: 8px;
  border: 1px solid #d3cdbf;
  background-color: #ffffff;
  font-family: inherit;
  font-size: 1.1rem;
  resize: none;
  box-sizing: border-box; /* Important so padding doesn't break width */
}

.submit-btn {
  padding: 15px;
  background-color: #0c0c0c;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1.2rem;
  transition: opacity 0.2s;
}

.submit-btn:hover {
  opacity: 0.9;
}

.back-link {
  text-align: center;
  color: #666;
  text-decoration: none;
  font-size: 0.9rem;
}
</style>
