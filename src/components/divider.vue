<template>
	<div
		class="
    relative
    h-[120px]
    flex flex-col justify-center items-center"
	>
		<slot name="upperHalf" />
		<slot name="lowerHalf" />
		<slot name="left" />
		<slot name="right" />
		<div class="absolute">
			<slot name="middle" />
		</div>
	</div>
</template>
