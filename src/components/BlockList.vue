<script setup lang="ts">
import { PropType } from "vue"
import { IBlock } from "../model/IBlock"

const props = defineProps({
	items: {
		type: Array as PropType<IBlock[]>,
		required: true,
	},
	selectedItems: {
		type: Array as PropType<IBlock[]>,
		required: true,
	},
})

const emits = defineEmits<{
	(e: "clickItem", item: IBlock): void
}>()

const checkActive = (item: IBlock) => {
	return props.selectedItems.some(({ id }) => id === item.id)
}
</script>

<template>
	<div class="list">
		<div
			class="item"
			v-for="item in items"
			:key="item.id"
			@click="() => emits('clickItem', item)"
			:class="{ active: checkActive(item) }"
		>
			{{ item.name }}
		</div>
	</div>
</template>

<style scoped>
.list {
	padding: 10px;
	display: flex;
	grid-gap: 10px;
	flex-wrap: wrap;
	border: 2px solid #000;
}
.item {
	width: 100px;
	height: 100px;
	display: flex;
	align-items: center;
	justify-content: center;
	border: 1px solid #000;
	cursor: pointer;
}

.active {
	background-color: aqua;
}
</style>
