<template>
  <article class="max-w-4xl mx-auto">
    <!-- Header -->
    <div class="mb-8">
      <NuxtLink
        to="/blog"
        class="inline-flex items-center text-secondary hover:text-primary font-medium mb-6 transition-colors duration-200"
      >
        <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
        </svg>
        Back to Blog
      </NuxtLink>

      <!-- Category Badge -->
      <div class="mb-4">
        <span class="bg-secondary text-white px-3 py-1 rounded-full text-sm font-medium">
          Music
        </span>
      </div>

      <!-- Title -->
      <h1 class="text-4xl md:text-5xl font-bold text-primary mb-6">
        The guitar solos that live rent-free in my head
      </h1>

      <!-- Meta Info -->
      <div class="flex flex-wrap items-center text-gray-600 text-sm mb-6">
        <span class="mr-4">by David Larsen</span>
        <span class="mr-4">•</span>
        <time datetime="2025-11-09" class="mr-4">
          November 9, 2025
        </time>
        <span class="mr-4">•</span>
        <span class="mr-4">6 min read</span>
      </div>

      <!-- Tags -->
      <div class="flex flex-wrap gap-2 mb-8">
        <span
          v-for="tag in ['guitar', 'music', 'pink-floyd', 'led-zeppelin', 'david-gilmour', 'jimmy-page', 'guitar-solos', 'classic-rock']"
          :key="tag"
          class="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
        >
          #{{ tag }}
        </span>
      </div>
    </div>

    <!-- Featured Image -->
    <div class="mb-8">
      <img
        src="/images/guitar.png"
        alt="The guitar solos that live rent-free in my head"
        class="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
      />
    </div>

    <!-- Content -->
    <div class="prose prose-lg max-w-none mb-12">
      <p class="text-xl text-gray-600 italic mb-6">A love letter to the moments where time slows, bends, and climbs an octave higher.</p>

      <p>Some solos are fast. Some are flashy. Then there are the ones that feel like the room tilts a little, the air thickens, and you catch yourself holding your breath. This is about those moments.</p>

      <p>Two of my all-time favorites couldn't be more different, yet they hit that same nerve: Pink Floyd's "Echoes" from Live at Pompeii and Jimmy Page's solo on "Stairway to Heaven." Both have that mix of patience, tension, and absolute emotional payoff.</p>

      <hr class="my-8 border-gray-300" />

      <h2>Echoes – Pink Floyd (Live at Pompeii)</h2>

      <p>There's a reason people get weirdly poetic when they talk about "Echoes." It's not just the amphitheater, the lava rocks, or the fact that the band dragged a full stage rig into a place where ancient Romans once sat. It's the way David Gilmour plays like he's sculpting air.</p>

      <h3>The moment</h3>

      <p>Around 5:50, Gilmour hits that octave climb—a slow, deliberate walk up the neck from a simple F# minor motif. Ninth fret. Twelfth. Higher. Each bend hangs in the air long enough to make you lean forward.</p>

      <p>The 2016 remix sharpens the whole thing. The highs are glassy without being harsh, the separation cleaner, and every sustain has more room to bloom. Same emotional punch as the original, but with the dust brushed off.</p>

      <h3>Why it works</h3>
      <ul>
        <li>It's patient. Zero rush.</li>
        <li>Octave displacement builds tension without ever showing off.</li>
        <li>The amphitheater does half the work. Natural reverb is basically another band member.</li>
        <li>The remix reminds you how intentional every note was.</li>
      </ul>

      <h3>Gear rabbit hole (because we're all weak):</h3>
      <ul>
        <li><strong>Guitar:</strong> Gilmour's Black Strat, a late-'60s Fender Stratocaster he modified endlessly.</li>
        <li><strong>Amps:</strong> Hiwatt DR103 heads into WEM Starfinder 4x12 cabs.</li>
        <li><strong>Core effects:</strong> Binson Echorec (the heartbeat of the tone), Fuzz Face, Vox wah, DeArmond volume pedal, and a Leslie 147 for that swirling "is the guitar singing?" texture.</li>
      </ul>

      <p>If you want to dive deeper, the Christie's Black Strat write-up and Gilmourish's Pompeii rig breakdown are gold mines.</p>

      <hr class="my-8 border-gray-300" />

      <h2>Stairway to Heaven – Led Zeppelin (Jimmy Page)</h2>

      <p>You can roll your eyes because it's overplayed. You can complain about guitar-store kids butchering the intro. None of that changes the fact that Jimmy Page built the blueprint for the "rock ballad eruption," and nobody has topped it since.</p>

      <h3>The setup</h3>

      <p>For five minutes "Stairway" simmers. Acoustic guitars, recorders, Tolkien energy. Then at 5:55, the dam breaks.</p>

      <h3>The solo</h3>

      <p>Page launches into nearly two minutes of improvisational chaos. It sits mostly in A minor pentatonic, but he throws in those signature triplet runs, wide bends, and a vibrato that practically screams.</p>

      <p>The looseness is part of the charm. It's not polished. It's alive.</p>

      <h3>Tone and tools</h3>
      <ul>
        <li><strong>Guitar:</strong> His '59 Gibson Les Paul Standard "#1", gifted by Joe Walsh.</li>
        <li><strong>Amp:</strong> A slightly overdriven Marshall.</li>
        <li><strong>Effects:</strong> None. Just a Les Paul abusing tubes.</li>
      </ul>

      <h3>Why it works</h3>
      <ul>
        <li>After six minutes of tension, the solo hits like a pressure valve.</li>
        <li>It ramps from soulful to frantic without losing control.</li>
        <li>You can hum it. A two-minute solo that people can whistle is rare.</li>
      </ul>

      <h3>Cultural footprint</h3>
      <ul>
        <li>The "No Stairway" joke in Wayne's World exists because everyone tried to play this solo.</li>
        <li>Nearly every "Best Guitar Solo Ever" poll puts it in the top two.</li>
        <li>It's still the template for how to build a climax in rock.</li>
      </ul>

      <hr class="my-8 border-gray-300" />

      <h2>Why these solos stay with me</h2>

      <p>Both solos are lessons in restraint. Gilmour builds space. Page builds tension. Neither relies on technical flash to land the punch. They're reminders that the best solos aren't scales—they're storytelling.</p>

      <p>If you're building your own list or writing about guitar moments that move you, start with the emotion first. The gear and theory just help explain why your stomach flips when the octave hits or when the pentatonic run crests.</p>
    </div>

    <!-- Footer Navigation -->
    <div class="border-t border-gray-200 pt-8">
      <div class="flex flex-col sm:flex-row justify-between items-center">
        <NuxtLink
          to="/blog"
          class="text-secondary hover:text-primary font-medium mb-4 sm:mb-0 transition-colors duration-200"
        >
          ← Back to All Posts
        </NuxtLink>
      </div>
    </div>
  </article>
</template>

<script setup>
useHead({
  title: 'The guitar solos that live rent-free in my head',
  meta: [
    { name: 'description', content: 'A love letter to the moments where time slows, bends, and climbs an octave higher. Exploring iconic guitar solos from Pink Floyd\'s "Echoes" and Led Zeppelin\'s "Stairway to Heaven."' },
    { property: 'og:title', content: 'The guitar solos that live rent-free in my head' },
    { property: 'og:description', content: 'A love letter to the moments where time slows, bends, and climbs an octave higher. Exploring iconic guitar solos from Pink Floyd\'s "Echoes" and Led Zeppelin\'s "Stairway to Heaven."' },
    { property: 'og:image', content: '/images/guitar.png' },
    { property: 'og:type', content: 'article' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'The guitar solos that live rent-free in my head' },
    { name: 'twitter:description', content: 'A love letter to the moments where time slows, bends, and climbs an octave higher. Exploring iconic guitar solos from Pink Floyd\'s "Echoes" and Led Zeppelin\'s "Stairway to Heaven."' }
  ]
})
</script>

<style scoped>
.prose {
  @apply text-gray-700 leading-relaxed;
}

.prose h1 {
  @apply text-3xl font-bold text-primary mt-8 mb-4;
}

.prose h2 {
  @apply text-2xl font-semibold text-primary mt-8 mb-4;
}

.prose h3 {
  @apply text-xl font-medium text-primary mt-6 mb-3;
}

.prose h4 {
  @apply text-lg font-medium text-primary mt-4 mb-2;
}

.prose p {
  @apply mb-6;
}

.prose blockquote {
  @apply border-l-4 border-secondary pl-6 my-6 italic text-gray-600;
}

.prose ul, .prose ol {
  @apply mb-6;
}

.prose li {
  @apply mb-2;
}

.prose a {
  @apply text-secondary hover:text-primary underline transition-colors duration-200;
}

.prose table {
  @apply w-full border-collapse border border-gray-300 my-6;
}

.prose th, .prose td {
  @apply border border-gray-300 px-4 py-2 text-left;
}

.prose th {
  @apply bg-gray-100 font-medium;
}

.prose code {
  @apply bg-gray-100 px-2 py-1 rounded text-sm;
}

.prose pre {
  @apply bg-gray-900 text-white p-4 rounded-lg overflow-x-auto my-6;
}
</style>
