<template>
  <div>
    <Head>
      <Title>Why I keep going back to La Cuchara | David Larsen</Title>
      <Meta name="description" content="Years in, La Cuchara still delivers: sit at the bar, share small plates, chase the rotating gin & tonics, and watch a tight team run like clockwork." />
      <Meta property="og:title" content="Why I keep going back to La Cuchara" />
      <Meta property="og:description" content="Years in, La Cuchara still delivers: sit at the bar, share small plates, chase the rotating gin & tonics, and watch a tight team run like clockwork." />
      <Meta property="og:image" content="https://davidlarsen.me/images/lacuchara.png" />
      <Meta property="og:url" content="https://davidlarsen.me/blog/la-cuchara-baltimore-review" />
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content="Why I keep going back to La Cuchara" />
      <Meta name="twitter:description" content="Years in, La Cuchara still delivers: sit at the bar, share small plates, chase the rotating gin & tonics, and watch a tight team run like clockwork." />
      <Meta name="twitter:image" content="https://davidlarsen.me/images/lacuchara.png" />
    </Head>

    <div class="container mx-auto px-6 py-12 max-w-4xl">
      <!-- Header -->
      <div class="mb-8">
        <NuxtLink to="/blog" class="text-secondary hover:text-primary transition-colors duration-200 mb-4 inline-block">
          ← Back to Blog
        </NuxtLink>
        
        <h1 class="text-4xl md:text-5xl font-bold text-primary mb-4">
          Why I keep going back to La Cuchara
        </h1>
        
        <div class="flex flex-wrap items-center gap-4 text-secondary text-sm mb-6">
          <span>August 13, 2025</span>
          <span>•</span>
          <span>5 min read</span>
          <span>•</span>
          <span class="bg-gray-100 px-3 py-1 rounded-full">Food</span>
        </div>
        
        <div class="flex flex-wrap gap-2 mb-8">
          <span v-for="tag in ['restaurant review', 'baltimore', 'la cuchara', 'shared plates', 'happy hour', 'gin and tonic', 'woodberry']" 
                :key="tag" 
                class="text-xs bg-gray-50 text-secondary px-2 py-1 rounded">
            #{{ tag }}
          </span>
        </div>
      </div>

      <!-- Featured Image -->
      <div class="mb-8">
        <img 
          src="/images/lacuchara.png" 
          alt="La Cuchara Baltimore Review"
          class="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
        />
      </div>

      <!-- Content -->
      <article class="prose prose-lg max-w-none">
        <p><a href="https://www.lacucharabaltimore.com/" target="_blank" rel="noopener noreferrer" class="text-primary hover:text-secondary transition-colors">La Cuchara — lacucharabaltimore.com</a></p>
        
        <p>I've been going to La Cuchara for years, and it still feels fresh every time. The room hums, the plates move, and the bar is the best seat in the house.</p>
        
        <h2>The bar > a table</h2>
        <p>I've done both, but the bar wins. You're in the flow with bartenders, runners, and that quiet choreography between service and kitchen. It is fun to watch a team that tight do their thing, and this place runs like a machine.</p>
        
        <h2>Menus that actually change</h2>
        <p>They print menus daily, and the cooking is built around seasonality. You never have to ask what is eighty-sixed because the paper in your hand is the source of truth. It keeps regulars like me curious, and it gives the team room to cook what is good right now.</p>
        
        <h2>The rotating gin & tonics</h2>
        <p>One of my favorite quirks: the bar often runs rotating gin and tonic builds, usually two at a time, and they swap often. I have gone back two weeks later and had totally different combos. It is an easy way to try something new without overthinking it.</p>
        
        <h2>Shared plates done right</h2>
        <p>The menu keeps a few staples and then shifts around them. Most things are built to share, which is how I like to eat here. A couple of small plates, something from the wood fire, and a wild card from the day's list makes a great lineup. The whole concept leans Basque and wood-fired, which fits the style.</p>
        
        <h2>What I order most</h2>
        <ul>
          <li>Jamón croquettes</li>
          <li>Boquerones</li>
          <li>Spinach & Gruyère croquettes</li>
          <li>Shrimp a la plantxa</li>
        </ul>
        
        <h2>The staff and that "menu whisperer"</h2>
        <p>Everyone you deal with is on it: host, servers, bartenders. There is also a person whose whole job is to talk through the menu at the bar, field questions, and steer you to the right dishes. Knowing prep methods, sourcing, and how things come together makes a difference. It is the kind of role you usually see in fine-dining rooms, and it adds real value to a casual night out.</p>
        
        <h2>Happy hour is a cheat code</h2>
        <p>Prices are fair for the quality, but happy hour is where you can really sample widely. They run bar happy hours with drink specials and half-priced small plates. That lets you order a spread without guessing.</p>
        
        <h2>Logistics: easy to get to, easy to park</h2>
        <p>It is in the Meadow Mill building in Woodberry. I rarely wait if I am smart about time, and I have always found parking in the lot next to the restaurant.</p>
        
        <h2>Quick tips if it is your first time</h2>
        <ul>
          <li>Sit at the bar if you can. That is the show.</li>
          <li>Ask about the day's G&Ts.</li>
          <li>Order for the table: two or three smalls, then share something from the grill.</li>
          <li>If you like dessert, keep room. The pistachio ice cream I had recently was worth it.</li>
        </ul>
        
        <h2>Why it stays in my rotation</h2>
        <p>Consistent service. A menu that changes without losing its backbone. A bar program that nudges you to try new things. And a space that rewards regulars without getting precious about it. When I want a great meal and I am up for something new, this is where I land.</p>
      </article>

      <!-- Navigation -->
      <div class="mt-12 pt-8 border-t border-gray-200">
        <div class="flex justify-between items-center">
          <NuxtLink to="/blog" class="text-primary hover:text-secondary transition-colors duration-200">
            ← Back to Blog
          </NuxtLink>
          
          <div class="flex gap-4">
            <a href="https://twitter.com/intent/tweet?text=Why%20I%20keep%20going%20back%20to%20La%20Cuchara&url=https://davidlarsen.me/blog/la-cuchara-baltimore-review" 
               target="_blank" 
               rel="noopener noreferrer"
               class="text-secondary hover:text-primary transition-colors duration-200">
              Share on Twitter
            </a>
            <a href="https://www.linkedin.com/sharing/share-offsite/?url=https://davidlarsen.me/blog/la-cuchara-baltimore-review" 
               target="_blank" 
               rel="noopener noreferrer"
               class="text-secondary hover:text-primary transition-colors duration-200">
              Share on LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Page-specific SEO and meta
</script>

<style scoped>
.prose h2 {
  @apply text-2xl font-semibold text-primary mt-8 mb-4;
}

.prose p {
  @apply text-secondary leading-relaxed mb-6;
}

.prose ul {
  @apply mb-6 pl-6;
}

.prose li {
  @apply text-secondary mb-2;
}

.prose a {
  @apply text-primary hover:text-secondary transition-colors;
}
</style>