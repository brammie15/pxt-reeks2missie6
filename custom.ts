
player.execute("/scriptevent cc:getId " + mobs.queryTarget((mobs.target(MY_AGENT)))[0].uniqueId)

enum CoralTypes {
    //% block="Red Coral"
    Red,
    //% block="Blue Coral"
    Blue
}

//% color=190 weight=100 block="CodeCosmos"
namespace CodeCosmos {
    //% block="Zet klaar (level1)"
    //% block.loc.en="Setup (level1)"
    export function setup_level1() {
        agent.teleport(world(2451, -2, 57), 0)
    }

    //% block="Zet klaar (level2)"
    //% block.loc.en="Setup (level2)"
    export function setup_level2(){
        agent.teleport(world(2446, -2, 40), NORTH)
    }

    //% block="Zet klaar (level3)"
    //% block.loc.en="Setup (level3)"
    export function setup_level3() {
        agent.teleport(world(2447, -2, 30), NORTH)
    }




    // Level 2
    
    //Slot 0: red Coral
    //Slot 1: Blue Coral

    //% block="place $color below agent"
    export function place_coral(color?: CoralTypes) {
        // if(color == CoralTypes.Red){
        //     agent.setSlot(0);
        // }
        // if (color == CoralTypes.Blue) {
        //     agent.setSlot(1);
        // }
        // agent.destroy(DOWN)
        builder.teleportTo(positions.add(
            agent.getPosition(),
            pos(0, -2, 0)
        ))
        builder.place(WATER)
        builder.move(SixDirection.Up, 1);
        if(color == CoralTypes.Red){
            builder.place(FIRE_CORAL_BLOCK)
        }
        if (color == CoralTypes.Blue) {
            builder.place(TUBE_CORAL_BLOCK)
        }
        
        // agent.place(DOWN)
    }

    //% block="Zet klaar (missie 2, level 1)"
    export function setup_part2_level1(){
        agent.teleport(world(2445, -1, 11), EAST);
    }

    //% block="is blok %block=block onder de agent"
    //% block.loc.en="is block %block=block under the agent"
    //% block.shadow=minecraftBlock
    export function is_block_under_agent(block: number): boolean {
        let block_under_agent = agent.getPosition().add(world(0,-1,0))
        return blocks.testForBlock(block, block_under_agent)
    }

}

/**
 * Your assistant in Minecraft to help you get things done.
 */

//% color=#D83B01 weight=64 icon="icons/Agent_icon_white.png"
namespace agent2 {

    //% block="Ga vooruit"
    export function move_forward(){
        agent.move(FORWARD, 1)
    }
}
