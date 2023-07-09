# Wrastlin

## Wrestlers
wrestlers need finishing moves

### Stats
#### Physical Stats
muscle: number
appendages: number 
wingspan: number
spry: number

#### Emotional Stats
moxie: number
ruthlessness: number
hunger: number
work_ethic: number
chivalry: number

style: [Brawler, Acrobat]

#### Traits

| Name | Description |
|---|---|
| Petty | Prone to seek revenge for any slight |
| Chivalrous | Seeks to protect against wrong doing |
| 


## How a match will work

Matches will need to take a turn based approach to fit more into a simulation

A turn consists of 
1. Setup
2. Define Clashes 
3. Resolve Clashses
For each
	a. Setup
	b. choose leader - Model this ??
	c. choose move - Maybe a model ???
	d. try to execute move - Model this
	e. resolve outcome (success/failure)
4. Resolve Turn

A match ends when a wrestler either aborts, taps out or successfully executes a pin

**Abort** is anytime a wrestler cant finish a match (ex injury/death)

Clashes and Defining them
At some point i want this to include many wrestlers at a time. To deal with that there needs to be this idea of mini clashes happening all at the same time.

A clash is a smaller subset of wrestlers in a match that are opposing each other. This could be a tag team match and two wrestlers fighting on the outside of the ring and two wrestlers fighting on the inside of the ring.

The ring currently has 3 positions (inner, outer, orbit)
Then maybe a cage match just has inner.

### Temporary stats during a match
tired: number
crowd: number
gore: number
referee: number
self worth: number


### Reason a move can fail
Wrestlers should never just miss its either reversed, blocked or successful

Reversed means that on the next clash the target is the lead
Blocked the move goes off but the target takes less effect from the move
Successful the move goes off at full effect

Moves will be filtered by different criteria based on the move and then prioritized.
Filter criteria examples
 - A wrestlers signature move would need the crowd to be at a certain level
 - A top rope move would need the lead to be in the ring.

Priority examples
 - Pinning when the target is less likely to get up
 - Making sure that a signature move is chosen above other moves

Success of a move should also be based on the move
 - An acrobatic move is easier for an acrobatic wrestler
 - a grapple is easier if the lead has more appendages



Make a list of the available moves
- Filter out anything thats impossible
- decide the what the wrestler is looking to do. This is based off the temporary stats
  - tired and needs some energy
	- desperate and trying to hail mary
	- angry and looking to humiliate
	- WIN (pinning or trying to)
	- Boastful and trying to look good
	- 
- Score and rank all the moves 
- Then randomize the selection of the move 

