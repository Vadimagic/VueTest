<script setup lang="ts">
import BlockList from "@/components/BlockList.vue"
import useBlockStore from "@/composition/useBlockStore"
import { blocksLeftData, blocksRightData } from "@/data/blocksData"
import ActiveBlocks from "@/components/ActiveBlocks.vue"

const { State, Actions } = useBlockStore()
</script>

<template>
	<section class="container">
		<ActiveBlocks />
		<div class="lists">
			<BlockList
				:items="blocksLeftData"
				:selected-items="State.activeBlocksLeft"
				@click-item="Actions.clickLeftBlock"
			/>
			<BlockList
				:items="blocksRightData"
				:selected-items="[State.activeBlockRight]"
				@click-item="Actions.clickRightBlock"
			/>
		</div>
	</section>
</template>

<style scoped>
.container {
	border: 2px dashed #000;
	padding: 10px;
}

.lists {
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-gap: 50px;
}
</style>
