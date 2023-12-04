<script setup lang="ts">
import accordion from './accordion.vue';
</script>

<template>
    <div class="section pb-[100px] backgroundImg
    bg-white 
    pt-[100px]">
        <div class="container">
            <h2>FAQs</h2>
            <div class="max-w-800 mt-15 mx-auto">
                <accordion>
                        <template v-slot:question>
                            Why wouldn't I just hire a full-time designer?
                        </template>
                        <template v-slot:answer>
                            Good question! For starters, the annual cost of a full-time senior-level designer now exceeds $100,000, plus benefits (and good luck finding one available). Aside from that, you may not always have enough work to keep them busy at all times, so you're stuck paying for time you aren't able to utilize. 
                            <br>
                            <br>
                            With the monthly plan, you can pause and resume your subscription as often as you need to ensure you're only paying your designer when you have work available for them.
                        </template>
                </accordion>
                <accordion>
                        <template v-slot:question>
                            Is there a limit to how many requests I can have?
                        </template>
                        <template v-slot:answer>
                            Once subscribed, you're able to add as many design requests to your queue as you'd like, and they will be delivered one by one.
                        </template>
                </accordion>
                <accordion>
                        <template v-slot:question>
                            How fast will I receive my designs?
                        </template>
                        <template v-slot:answer>
                            On average, most requests are completed in just two days or less. However, more complex requests can take longer.
                        </template>
                </accordion>
                <accordion>
                        <template v-slot:question>
                            Who are the designers?
                        </template>
                        <template v-slot:answer>
                            You might be surprised to hear this, but Designjoy is actually an agency of one. This means you'll work directly with me, founder of Designjoy. However, power-ups requests such as animations or custom illustrations are provided by partner designers.
                        </template>
                </accordion>
                <accordion>
                        <template v-slot:question>
                            How does the pause feature work?
                        </template>
                        <template v-slot:answer>
                            We understand you may not have enough design work to fill up entire month. Perhaps you only have one or two design requests at the moment. That's where pausing your subscription comes in handy.
                            <br>
                            <br>
                            Billing cycles are based on 31 day period. Let's say you sign up and use the service for 21 days, and then decide to pause your subscription. This means that the billing cycle will be paused and you'll have 10 days of service remaining to be used anytime in the future.
                        </template>
                </accordion>
                <accordion>
                        <template v-slot:question>
                            What programs do you design in?
                        </template>
                        <template v-slot:answer>
                            Most requests are designed using Figma.
                        </template>
                </accordion>
                <accordion>
                        <template v-slot:question>
                            How do I request designs?
                        </template>
                        <template v-slot:answer>
                            Designjoy offers a ton of flexibility in how you request designs using Trello. Some common ways clients request designs is directly via Trello, sharing Google docs or wireframes, or even recording a brief Loom video (for those who prefer not to write their briefs out). Basically, if it can be linked to or shared in Trello, it's fair game.
                        </template>
                </accordion>
                <accordion>
                        <template v-slot:question>
                            What if I don't like the design?
                        </template>
                        <template v-slot:answer>
                            No worries! We'll continue to revise the design until you're 100% satisfied.
                        </template>
                </accordion>
                <accordion>
                        <template v-slot:question>
                            Is there any design work you don't cover?
                        </template>
                        <template v-slot:answer>
                            Absolutely. Designjoy does not cover the following design work: 3D modeling, animated graphics (GIFS, etc.), document design (medical forms, etc.), complex packaging, and extensive print design (magazines, books, etc.).
                        </template>
                </accordion>
                <accordion>
                        <template v-slot:question>
                            What if I only have a single request?
                        </template>
                        <template v-slot:answer>
                            That's fine. You can pause your subscription when finished and return  when you have additional design needs. There's no need to let the remainder of your subscription go to waste.
                        </template>
                </accordion>
                <accordion>
                    <template v-slot:question>
                        Are there any refunds if I don't like the service?
                    </template>
                    <template v-slot:answer>
                        Due to the high quality nature of the work, there will be no refunds issued.
                    </template>
                </accordion>
            </div>
        </div>
    </div>
</template>