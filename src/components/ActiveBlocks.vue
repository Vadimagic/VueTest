<script setup lang="ts">
import useBlockStore from "@/composition/useBlockStore"
import { blocksLeftData } from "@/data/blocksData"

const { State } = useBlockStore()
</script>

<template>
	<div class="active">
		<div class="active-left">
			<div class="blocks-left">
				<div
					class="block block-left"
					v-for="block in State.activeBlocksLeft"
					:key="block.id"
				>
					{{ block.name }}
				</div>
			</div>
			<p class="info-text">
				{{
					`Selected: ${State.activeBlocksLeft.length} / ${blocksLeftData.length}`
				}}
			</p>
		</div>
		<div class="block block-right">
			{{ State.activeBlockRight.name }}
		</div>
	</div>
</template>

<style scoped>
.active {
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-gap: 50px;
	margin-bottom: 50px;
	grid-row-end: auto;
	min-height: 200px;
}

.active-left {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	border: 1px solid #000;
	padding: 10px;
}

.blocks-left {
	display: flex;
	grid-gap: 10px;
	flex-wrap: wrap;
}

.block {
	display: flex;
	align-items: center;
	justify-content: center;
	border: 1px solid #000;
}

.block-left {
	width: 50px;
	height: 50px;
}

.info-text {
	margin-top: 10px;
}
</style>
