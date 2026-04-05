<script setup>
import Textbox from "./Textbox.vue";
import Button from "./Button.vue";
</script>

<template>
  <main>
    <Textbox
      hdr="Introduction"
      msg="&emsp;<i>A Cut From the Same Fabric</i> was a project made in 2026 by Caiden Kim & Mason Darstch for the Great World Text Conference hosted in Madison each year. Our project involves an incomplete story(Shown below) where participants gain the opportunity to become authors in their own right, crafting their own unique endings. Once someone contributes their own ending, they gain the opportunity to browse and read some of the other endings written by all of the other participants. You can submit your own ending by clicking the button below. I hope you enjoy reading all of these endings created by the community, and happy writing!"
    />
    <Textbox
      hdr="Story for GWTC"
      msg="Arthur had spent his entire life inside the family shop on State Street, surrounded by the relentless ticking of old clocks and the quiet history of forgotten trinkets. But as the years pressed on, his famed dexterity began to fade, his hands no longer steady enough for the delicate gears. It was time to pass the shop to his granddaughter, Elara.

Before he finally stepped out the door, he pressed an old, rusted key into her palm. “This belongs to the grandfather clock in the back,” he told her, his voice soft. “The only one that has never worked. Never so much as made a sound. To everyone else, it’s just a useless piece of carved wood.”

He folded her fingers over the cold metal, giving her hand a gentle, reassuring squeeze before straightening up. “But this clock doesn’t measure seconds, minutes, or hours, my dear. It measures worth.” He fixed her with a look that was both stern and fiercely loving. “Only turn this key when you are truly ready. Good luck, Elara.”

Elara waited until nightfall, when the shop finally fell silent. A pale shaft of moonlight spilled through the window, catching the face of the silent grandfather clock and bathing it in a pearlescent glow, revealing a quiet majesty it had hidden all along.

Taking a steadying breath, she slipped the key into the back of the clock and gave it a slow, deliberate turn. Deep within the wooden casing, the long-frozen pendulum groaned to life. It began to swing back and forth, cutting through the quiet with a heavy, rhythmic <i>tick... tock.</i> But the sound didn't just fill the room; it seemed to shift the very air. The shadows around her began to stretch and stir, and beneath the ticking, a raspy, ancient voice whispered from the depths of the wood, calling her name."
    />
    <Button link="submit" label="Click Me To Write Your Ending!" />
    <Button link="read" label="Click Me To Read Other's Endings!" />
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  height: 100vh;
  width: 100vw;
  position: absolute;
  left: 0;
  top: 0;
  background-color: #f8f4ff;
  color: #0c0c0c;
}
</style>

<style>
/* Not scoped */
html,
body {
  margin: 0;
  padding: 0;
  background-color: #f8f4ff;
}
</style>
