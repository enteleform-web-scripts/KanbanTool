
export enum Position{
	Left,
	Right,
	Top,
	Bottom,
}

export type HorizontalPosition = (Position.Left | Position.Right )
export type VerticalPosition   = (Position.Top  | Position.Bottom)
