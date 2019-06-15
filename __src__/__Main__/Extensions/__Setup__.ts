//###  Module  ###//
import {KanbanTool } from "~/Utils/KanbanTool/__Main__"

//###  Aliases  ###//
const {CardType, remove_PageLoad_Callback} = KanbanTool


remove_PageLoad_Callback(CardType.Filter.show_AllCards_ID  )
remove_PageLoad_Callback(CardType.Filter.add_KeyBindings_ID)

