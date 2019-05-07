//###  Module  ###//
import {Settings     } from "../../../../__src__/Settings"
import {ChunkSplitter} from "../../Utils/ChunkSplitter"


export const css_Splitter = new ChunkSplitter(Settings.css_FileBase)
export const pug_Splitter = new ChunkSplitter(Settings.pug_FileBase)
