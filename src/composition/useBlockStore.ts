import { ref } from "vue"
import { IBlock } from "../model/IBlock"

interface StateBlocks {
	activeBlocksLeft: IBlock[]
	activeBlockRight: IBlock
}

const State = ref<StateBlocks>({
	activeBlocksLeft: [],
	activeBlockRight: {} as IBlock,
})

const useBlockStore = () => {
	const Mutations = {
		setActiveBlocksLeft(val: IBlock[]) {
			State.value.activeBlocksLeft = val
		},
		setActiveBlockRight(val: IBlock) {
			State.value.activeBlockRight = val
		},
	}

	const Actions = {
		clickLeftBlock(val: IBlock) {
			let newState = State.value.activeBlocksLeft
			if (!State.value.activeBlocksLeft.some(({ id }) => id === val.id)) {
				newState.push(val)
			} else {
				newState = newState.filter(({ id }) => id !== val.id)
			}
			Mutations.setActiveBlocksLeft(newState)
		},
		clickRightBlock(val: IBlock) {
			Mutations.setActiveBlockRight(val)
		},
	}

	return {
		State,
		Mutations,
		Actions,
	}
}
export default useBlockStore
