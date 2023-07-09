import { Conflict } from "./conflict";
import { WrestlerStats } from "./wrestler";

export interface Match {
  wrestlers: WrestlerStats[];
	isGameOver: boolean;
	conflicts: Conflict[];
}