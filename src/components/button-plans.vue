<template>
    <button class="
    mt-10 
    inline-block 
    py-6 
    bg-black 
    font-grifter text-white text-center text-[17px] tracking-[0.5px]
    rounded-[8px] shadow-[6px]"
    >
        <slot name="buttonName"></slot>
    </button>
</template>

<style>
button {
    box-shadow: 6px 6px rgba(0,0,0,.2);
    transition: all 0.2s;
}

button:hover {
    transform: translateY(-6px);
    box-shadow: 8px 8px rgba(0,0,0,.2);
}
</style>