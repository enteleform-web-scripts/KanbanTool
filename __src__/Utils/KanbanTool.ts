
export const KanbanTool  = (window as any).KT

export const activeBoard = KanbanTool.boards.models[0]
KanbanTool.activeBoard = activeBoard

export const cardTypes =
	activeBoard.cardTypes().active().map(
		({attributes}) => ({
			id:      attributes.id,
			name:    attributes.name,
			bgColor: attributes.color_attrs.rgb,
			fgColor: (
				attributes.color_attrs.invert
				? "#FFF"
				: "#000"
			),
		})
	)
