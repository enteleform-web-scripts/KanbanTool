
export enum Position{
	Left   = "Left",
	Right  = "Right",
	Top    = "Top",
	Bottom = "Bottom",
}

export type HorizontalPosition = (Position.Left | Position.Right )
export type VerticalPosition   = (Position.Top  | Position.Bottom)

export function is_HorizontalPosition(position:Position)
	{return ((position == Position.Left) || (position ==Position.Right))}

export function is_VerticalPosition(position:Position)
	{return ((position == Position.Top) || (position ==Position.Bottom))}
