import { DoodadType } from "doodad/IDoodad";
import { ActionType } from "entity/action/IAction";
import { ItemType, ItemTypeGroup } from "item/IItem";
import Mod from "mod/Mod";
import Register, { Registry } from "mod/ModRegistry";
import { RecipeComponent } from "item/Items";
import { CopperChestBase, IronChestBase, WroughtIronChestBase, WoodenChestBase, BaseStatsItemWoodenChest, BaseStatsItemCopperChest, BaseStatsItemWroughtIronChest, BaseStatsItemIronChest } from "./BaseRecipe";
import { BaseStatsDoodadCopperChest, BaseStatsDoodadIronChest, BaseStatsDoodadWoodenChest, BaseStatsDoodadWroughtIronChest } from "./BaseDoodad";

export default class ColorChests extends Mod {

    @Mod.instance<ColorChests>("ColorChests")
    public static readonly INSTANCE: ColorChests;

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Wooden Chests ( Black, White, Red, Yellow, Green, Orange, Purple )
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // Black
    @Register.item("BlackWoodenChest", {
        use: [ActionType.Build],
        weightRange: [10,11],
        weight: 10,
        onUse: { [ActionType.Build] : Registry<ColorChests>().get('doodadBlackWoodenChest')},
        recipe: {
			components: [
                ...WoodenChestBase,
				RecipeComponent(Registry<ColorChests>().get("itemBlackPigments"),1,1),
			],
			...BaseStatsItemWoodenChest
		},
        doodadContainer: Registry<ColorChests>().get('doodadBlackWoodenChest'),
        placeDownType: Registry<ColorChests>().get('doodadBlackWoodenChest'),
        groups: [ItemTypeGroup.Storage]
    })
    public itemBlackWoodenChest: ItemType;

    @Register.doodad("BlackWoodenChest", {
        ...BaseStatsDoodadWoodenChest,
        pickUp: [Registry<ColorChests>().get('itemBlackWoodenChest')]
    })
    public doodadBlackWoodenChest: DoodadType;

    // White
    @Register.item("WhiteWoodenChest", {
        use: [ActionType.Build],
        weightRange: [10,11],
        weight: 10,
        onUse: { [ActionType.Build] : Registry<ColorChests>().get('doodadWhiteWoodenChest')},
        recipe: {
			components: [
                ...WoodenChestBase,
				RecipeComponent(Registry<ColorChests>().get("itemWhitePigments"),1,1),
			],
			...BaseStatsItemWoodenChest
		},
        doodadContainer: Registry<ColorChests>().get('doodadWhiteWoodenChest'),
        placeDownType: Registry<ColorChests>().get('doodadWhiteWoodenChest'),
        groups: [ItemTypeGroup.Storage]
    })
    public itemWhiteWoodenChest: ItemType;

    @Register.doodad("WhiteWoodenChest", {
        ...BaseStatsDoodadWoodenChest,
        pickUp: [Registry<ColorChests>().get('itemWhiteWoodenChest')]
    })
    public doodadWhiteWoodenChest: DoodadType;

    // Red
    @Register.item("RedWoodenChest", {
        use: [ActionType.Build],
        weightRange: [10,11],
        weight: 10,
        onUse: { [ActionType.Build] : Registry<ColorChests>().get('doodadRedWoodenChest')},
        recipe: {
			components: [
                ...WoodenChestBase,
				RecipeComponent(Registry<ColorChests>().get("itemRedPigments"),1,1),
			],
			...BaseStatsItemWoodenChest
		},
        doodadContainer: Registry<ColorChests>().get('doodadRedWoodenChest'),
        placeDownType: Registry<ColorChests>().get('doodadRedWoodenChest'),
        groups: [ItemTypeGroup.Storage]
    })
    public itemRedWoodenChest: ItemType;

    @Register.doodad("RedWoodenChest", {
        ...BaseStatsDoodadWoodenChest,
        pickUp: [Registry<ColorChests>().get('itemRedWoodenChest')]
    })
    public doodadRedWoodenChest: DoodadType;

    // Yellow
    @Register.item("YellowWoodenChest", {
        use: [ActionType.Build],
        weightRange: [10,11],
        weight: 10,
        onUse: { [ActionType.Build] : Registry<ColorChests>().get('doodadYellowWoodenChest')},
        recipe: {
            components: [
                ...WoodenChestBase,
                RecipeComponent(Registry<ColorChests>().get("itemYellowPigments"),1,1),
            ],
            ...BaseStatsItemWoodenChest
        },
        doodadContainer: Registry<ColorChests>().get('doodadYellowWoodenChest'),
        placeDownType: Registry<ColorChests>().get('doodadYellowWoodenChest'),
        groups: [ItemTypeGroup.Storage]
    })
    public itemYellowWoodenChest: ItemType;

    @Register.doodad("YellowWoodenChest", {
        ...BaseStatsDoodadWoodenChest,
        pickUp: [Registry<ColorChests>().get('itemYellowWoodenChest')]
    })
    public doodadYellowWoodenChest: DoodadType;

    // Green
    @Register.item("GreenWoodenChest", {
        use: [ActionType.Build],
        weightRange: [10,11],
        weight: 10,
        onUse: { [ActionType.Build] : Registry<ColorChests>().get('doodadGreenWoodenChest')},
        recipe: {
            components: [
                ...WoodenChestBase,
                RecipeComponent(Registry<ColorChests>().get("itemGreenPigments"),1,1),
            ],
            ...BaseStatsItemWoodenChest
        },
        doodadContainer: Registry<ColorChests>().get('doodadGreenWoodenChest'),
        placeDownType: Registry<ColorChests>().get('doodadGreenWoodenChest'),
        groups: [ItemTypeGroup.Storage]
    })
    public itemGreenWoodenChest: ItemType;

    @Register.doodad("GreenWoodenChest", {
        ...BaseStatsDoodadWoodenChest,
        pickUp: [Registry<ColorChests>().get('itemGreenWoodenChest')]
    })
    public doodadGreenWoodenChest: DoodadType;

    // Orange
    @Register.item("OrangeWoodenChest", {
        use: [ActionType.Build],
        weightRange: [10,11],
        weight: 10,
        onUse: { [ActionType.Build] : Registry<ColorChests>().get('doodadOrangeWoodenChest')},
        recipe: {
            components: [
                ...WoodenChestBase,
                RecipeComponent(Registry<ColorChests>().get("itemOrangePigments"),1,1),
            ],
            ...BaseStatsItemWoodenChest
        },
        doodadContainer: Registry<ColorChests>().get('doodadOrangeWoodenChest'),
        placeDownType: Registry<ColorChests>().get('doodadOrangeWoodenChest'),
        groups: [ItemTypeGroup.Storage]
    })
    public itemOrangeWoodenChest: ItemType;

    @Register.doodad("OrangeWoodenChest", {
        ...BaseStatsDoodadWoodenChest,
        pickUp: [Registry<ColorChests>().get('itemOrangeWoodenChest')]
    })
    public doodadOrangeWoodenChest: DoodadType;

    // Purple
    @Register.item("PurpleWoodenChest", {
        use: [ActionType.Build],
        weightRange: [10,11],
        weight: 10,
        onUse: { [ActionType.Build] : Registry<ColorChests>().get('doodadPurpleWoodenChest')},
        recipe: {
            components: [
                ...WoodenChestBase,
                RecipeComponent(Registry<ColorChests>().get("itemPurplePigments"),1,1),
            ],
            ...BaseStatsItemWoodenChest
        },
        doodadContainer: Registry<ColorChests>().get('doodadPurpleWoodenChest'),
        placeDownType: Registry<ColorChests>().get('doodadPurpleWoodenChest'),
        groups: [ItemTypeGroup.Storage]
    })
    public itemPurpleWoodenChest: ItemType;

    @Register.doodad("PurpleWoodenChest", {
        ...BaseStatsDoodadWoodenChest,
        pickUp: [Registry<ColorChests>().get('itemPurpleWoodenChest')]
    })
    public doodadPurpleWoodenChest: DoodadType;

    

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Copper Chests ( Black, White, Red, Yellow, Green, Orange, Purple )
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // Black
    @Register.item("BlackCopperChest", {
        use: [ActionType.Build],
        weightRange: [7,11],
        weight: 7,
        onUse: { [ActionType.Build] : Registry<ColorChests>().get('doodadBlackCopperChest')},
        recipe: {
			components: [
                ...CopperChestBase,
				RecipeComponent(Registry<ColorChests>().get("itemBlackPigments"),1,1),
			],
			...BaseStatsItemCopperChest
		},
        doodadContainer: Registry<ColorChests>().get('doodadBlackCopperChest'),
        placeDownType: Registry<ColorChests>().get('doodadBlackCopperChest'),
        groups: [ItemTypeGroup.Storage]
    })
    public itemBlackCopperChest: ItemType;

    @Register.doodad("BlackCopperChest", {
       ...BaseStatsDoodadCopperChest,
       pickUp: [Registry<ColorChests>().get('itemBlackCopperChest')]
    })
    public doodadBlackCopperChest: DoodadType;

    // White
    @Register.item("WhiteCopperChest", {
        use: [ActionType.Build],
        weightRange: [7,11],
        weight: 7,
        onUse: { [ActionType.Build] : Registry<ColorChests>().get('doodadWhiteCopperChest')},
        recipe: {
			components: [
                ...CopperChestBase,
				RecipeComponent(Registry<ColorChests>().get("itemWhitePigments"),1,1),
			],
			...BaseStatsItemCopperChest
		},
        doodadContainer: Registry<ColorChests>().get('doodadWhiteCopperChest'),
        placeDownType: Registry<ColorChests>().get('doodadWhiteCopperChest'),
        groups: [ItemTypeGroup.Storage]
    })
    public itemWhiteCopperChest: ItemType;

    @Register.doodad("WhiteCopperChest", {
       ...BaseStatsDoodadCopperChest,
       pickUp: [Registry<ColorChests>().get('itemWhiteCopperChest')]
    })
    public doodadWhiteCopperChest: DoodadType;
    
    // Red
    @Register.item("RedCopperChest", {
        use: [ActionType.Build],
        weightRange: [7,11],
        weight: 7,
        onUse: { [ActionType.Build] : Registry<ColorChests>().get('doodadRedCopperChest')},
        recipe: {
			components: [
                ...CopperChestBase,
				RecipeComponent(Registry<ColorChests>().get("itemRedPigments"),1,1),
			],
			...BaseStatsItemCopperChest
		},
        doodadContainer: Registry<ColorChests>().get('doodadRedCopperChest'),
        placeDownType: Registry<ColorChests>().get('doodadRedCopperChest'),
        groups: [ItemTypeGroup.Storage]
    })
    public itemRedCopperChest: ItemType;

    @Register.doodad("RedCopperChest", {
       ...BaseStatsDoodadCopperChest,
       pickUp: [Registry<ColorChests>().get('itemRedCopperChest')]
    })
    public doodadRedCopperChest: DoodadType;
    
    // Yellow
    @Register.item("YellowCopperChest", {
        use: [ActionType.Build],
        weightRange: [7,11],
        weight: 7,
        onUse: { [ActionType.Build] : Registry<ColorChests>().get('doodadYellowCopperChest')},
        recipe: {
			components: [
                ...CopperChestBase,
				RecipeComponent(Registry<ColorChests>().get("itemYellowPigments"),1,1),
			],
			...BaseStatsItemCopperChest
		},
        doodadContainer: Registry<ColorChests>().get('doodadYellowCopperChest'),
        placeDownType: Registry<ColorChests>().get('doodadYellowCopperChest'),
        groups: [ItemTypeGroup.Storage]
    })
    public itemYellowCopperChest: ItemType;

    @Register.doodad("YellowCopperChest", {
       ...BaseStatsDoodadCopperChest,
       pickUp: [Registry<ColorChests>().get('itemYellowCopperChest')]
    })
    public doodadYellowCopperChest: DoodadType;

    // Green
    @Register.item("GreenCopperChest", {
        use: [ActionType.Build],
        weightRange: [7,11],
        weight: 7,
        onUse: { [ActionType.Build] : Registry<ColorChests>().get('doodadGreenCopperChest')},
        recipe: {
			components: [
                ...CopperChestBase,
				RecipeComponent(Registry<ColorChests>().get("itemGreenPigments"),1,1),
			],
			...BaseStatsItemCopperChest
		},
        doodadContainer: Registry<ColorChests>().get('doodadGreenCopperChest'),
        placeDownType: Registry<ColorChests>().get('doodadGreenCopperChest'),
        groups: [ItemTypeGroup.Storage]
    })
    public itemGreenCopperChest: ItemType;

    @Register.doodad("GreenCopperChest", {
       ...BaseStatsDoodadCopperChest,
       pickUp: [Registry<ColorChests>().get('itemGreenCopperChest')]
    })
    public doodadGreenCopperChest: DoodadType;

    // Orange
    @Register.item("OrangeCopperChest", {
        use: [ActionType.Build],
        weightRange: [7,11],
        weight: 7,
        onUse: { [ActionType.Build] : Registry<ColorChests>().get('doodadOrangeCopperChest')},
        recipe: {
			components: [
                ...CopperChestBase,
				RecipeComponent(Registry<ColorChests>().get("itemOrangePigments"),1,1),
			],
			...BaseStatsItemCopperChest
		},
        doodadContainer: Registry<ColorChests>().get('doodadOrangeCopperChest'),
        placeDownType: Registry<ColorChests>().get('doodadOrangeCopperChest'),
        groups: [ItemTypeGroup.Storage]
    })
    public itemOrangeCopperChest: ItemType;

    @Register.doodad("OrangeCopperChest", {
       ...BaseStatsDoodadCopperChest,
       pickUp: [Registry<ColorChests>().get('itemOrangeCopperChest')]
    })
    public doodadOrangeCopperChest: DoodadType;

    // Purple
    @Register.item("PurpleCopperChest", {
        use: [ActionType.Build],
        weightRange: [7,11],
        weight: 7,
        onUse: { [ActionType.Build] : Registry<ColorChests>().get('doodadPurpleCopperChest')},
        recipe: {
			components: [
                ...CopperChestBase,
				RecipeComponent(Registry<ColorChests>().get("itemPurplePigments"),1,1),
			],
			...BaseStatsItemCopperChest
		},
        doodadContainer: Registry<ColorChests>().get('doodadPurpleCopperChest'),
        placeDownType: Registry<ColorChests>().get('doodadPurpleCopperChest'),
        groups: [ItemTypeGroup.Storage]
    })
    public itemPurpleCopperChest: ItemType;

    @Register.doodad("PurpleCopperChest", {
       ...BaseStatsDoodadCopperChest,
       pickUp: [Registry<ColorChests>().get('itemPurpleCopperChest')]
    })
    public doodadPurpleCopperChest: DoodadType;


    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Wrought Iron Chests ( White, Red, Yellow, Green, Orange, Purple ) - Already black
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // White
    @Register.item("WhiteWroughtIronChest", {
        use: [ActionType.Build],
        weightRange: [15,20],
        weight: 15,
        onUse: { [ActionType.Build] : Registry<ColorChests>().get('doodadWhiteWroughtIronChest')},
        recipe: {
			components: [
                ...WroughtIronChestBase,
				RecipeComponent(Registry<ColorChests>().get("itemWhitePigments"),1,1),
			],
			...BaseStatsItemWroughtIronChest
		},
        doodadContainer: Registry<ColorChests>().get('doodadWhiteWroughtIronChest'),
        placeDownType: Registry<ColorChests>().get('doodadWhiteWroughtIronChest'),
        groups: [ItemTypeGroup.Storage]
    })
    public itemWhiteWroughtIronChest: ItemType;

    @Register.doodad("WhiteWroughtIronChest", {
       ...BaseStatsDoodadWroughtIronChest,
       pickUp: [Registry<ColorChests>().get('itemWhiteWroughtIronChest')]
    })
    public doodadWhiteWroughtIronChest: DoodadType;
    
    // Red
    @Register.item("RedWroughtIronChest", {
        use: [ActionType.Build],
        weightRange: [15,20],
        weight: 15,
        onUse: { [ActionType.Build] : Registry<ColorChests>().get('doodadRedWroughtIronChest')},
        recipe: {
			components: [
                ...WroughtIronChestBase,
				RecipeComponent(Registry<ColorChests>().get("itemRedPigments"),1,1),
			],
			...BaseStatsItemWroughtIronChest
		},
        doodadContainer: Registry<ColorChests>().get('doodadRedWroughtIronChest'),
        placeDownType: Registry<ColorChests>().get('doodadRedWroughtIronChest'),
        groups: [ItemTypeGroup.Storage]
    })
    public itemRedWroughtIronChest: ItemType;

    @Register.doodad("RedWroughtIronChest", {
       ...BaseStatsDoodadWroughtIronChest,
       pickUp: [Registry<ColorChests>().get('itemRedWroughtIronChest')]
    })
    public doodadRedWroughtIronChest: DoodadType;

    // Yellow
    @Register.item("YellowWroughtIronChest", {
        use: [ActionType.Build],
        weightRange: [15,20],
        weight: 15,
        onUse: { [ActionType.Build] : Registry<ColorChests>().get('doodadYellowWroughtIronChest')},
        recipe: {
			components: [
                ...WroughtIronChestBase,
				RecipeComponent(Registry<ColorChests>().get("itemYellowPigments"),1,1),
			],
			...BaseStatsItemWroughtIronChest
		},
        doodadContainer: Registry<ColorChests>().get('doodadYellowWroughtIronChest'),
        placeDownType: Registry<ColorChests>().get('doodadYellowWroughtIronChest'),
        groups: [ItemTypeGroup.Storage]
    })
    public itemYellowWroughtIronChest: ItemType;

    @Register.doodad("YellowWroughtIronChest", {
       ...BaseStatsDoodadWroughtIronChest,
       pickUp: [Registry<ColorChests>().get('itemYellowWroughtIronChest')]
    })
    public doodadYellowWroughtIronChest: DoodadType;

    // Green
    @Register.item("GreenWroughtIronChest", {
        use: [ActionType.Build],
        weightRange: [15,20],
        weight: 15,
        onUse: { [ActionType.Build] : Registry<ColorChests>().get('doodadGreenWroughtIronChest')},
        recipe: {
			components: [
                ...WroughtIronChestBase,
				RecipeComponent(Registry<ColorChests>().get("itemGreenPigments"),1,1),
			],
			...BaseStatsItemWroughtIronChest
		},
        doodadContainer: Registry<ColorChests>().get('doodadGreenWroughtIronChest'),
        placeDownType: Registry<ColorChests>().get('doodadGreenWroughtIronChest'),
        groups: [ItemTypeGroup.Storage]
    })
    public itemGreenWroughtIronChest: ItemType;

    @Register.doodad("GreenWroughtIronChest", {
       ...BaseStatsDoodadWroughtIronChest,
       pickUp: [Registry<ColorChests>().get('itemGreenWroughtIronChest')]
    })
    public doodadGreenWroughtIronChest: DoodadType;
    
    // Orange
    @Register.item("OrangeWroughtIronChest", {
        use: [ActionType.Build],
        weightRange: [15,20],
        weight: 15,
        onUse: { [ActionType.Build] : Registry<ColorChests>().get('doodadOrangeWroughtIronChest')},
        recipe: {
			components: [
                ...WroughtIronChestBase,
				RecipeComponent(Registry<ColorChests>().get("itemOrangePigments"),1,1),
			],
			...BaseStatsItemWroughtIronChest
		},
        doodadContainer: Registry<ColorChests>().get('doodadOrangeWroughtIronChest'),
        placeDownType: Registry<ColorChests>().get('doodadOrangeWroughtIronChest'),
        groups: [ItemTypeGroup.Storage]
    })
    public itemOrangeWroughtIronChest: ItemType;

    @Register.doodad("OrangeWroughtIronChest", {
       ...BaseStatsDoodadWroughtIronChest,
       pickUp: [Registry<ColorChests>().get('itemOrangeWroughtIronChest')]
    })
    public doodadOrangeWroughtIronChest: DoodadType;

    // Purple
    @Register.item("PurpleWroughtIronChest", {
        use: [ActionType.Build],
        weightRange: [15,20],
        weight: 15,
        onUse: { [ActionType.Build] : Registry<ColorChests>().get('doodadPurpleWroughtIronChest')},
        recipe: {
			components: [
                ...WroughtIronChestBase,
				RecipeComponent(Registry<ColorChests>().get("itemPurplePigments"),1,1),
			],
			...BaseStatsItemWroughtIronChest
		},
        doodadContainer: Registry<ColorChests>().get('doodadPurpleWroughtIronChest'),
        placeDownType: Registry<ColorChests>().get('doodadPurpleWroughtIronChest'),
        groups: [ItemTypeGroup.Storage]
    })
    public itemPurpleWroughtIronChest: ItemType;

    @Register.doodad("PurpleWroughtIronChest", {
       ...BaseStatsDoodadWroughtIronChest,
       pickUp: [Registry<ColorChests>().get('itemPurpleWroughtIronChest')]
    })
    public doodadPurpleWroughtIronChest: DoodadType;
    


    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Iron Chests ( Black, Red, Yellow, Green, Orange, Purple ) - Already white
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // Black
    @Register.item("BlackIronChest", {
        use: [ActionType.Build],
        weightRange: [15,20],
        weight: 15,
        onUse: { [ActionType.Build] : Registry<ColorChests>().get('doodadBlackIronChest')},
        recipe: {
			components: [
                ...IronChestBase,
				RecipeComponent(Registry<ColorChests>().get("itemBlackPigments"),1,1),
			],
			...BaseStatsItemIronChest
		},
        doodadContainer: Registry<ColorChests>().get('doodadBlackIronChest'),
        placeDownType: Registry<ColorChests>().get('doodadBlackIronChest'),
        groups: [ItemTypeGroup.Storage]
    })
    public itemBlackIronChest: ItemType;

    @Register.doodad("BlackIronChest", {
        ...BaseStatsDoodadIronChest,
        pickUp: [Registry<ColorChests>().get('itemBlackIronChest')]
    })
    public doodadBlackIronChest: DoodadType;

    // Red
    @Register.item("RedIronChest", {
        use: [ActionType.Build],
        weightRange: [15,20],
        weight: 15,
        onUse: { [ActionType.Build] : Registry<ColorChests>().get('doodadRedIronChest')},
        recipe: {
			components: [
                ...IronChestBase,
				RecipeComponent(Registry<ColorChests>().get("itemRedPigments"),1,1),
			],
			...BaseStatsItemIronChest
		},
        doodadContainer: Registry<ColorChests>().get('doodadRedIronChest'),
        placeDownType: Registry<ColorChests>().get('doodadRedIronChest'),
        groups: [ItemTypeGroup.Storage]
    })
    public itemRedIronChest: ItemType;

    @Register.doodad("RedIronChest", {
        ...BaseStatsDoodadIronChest,
        pickUp: [Registry<ColorChests>().get('itemRedIronChest')]
    })
    public doodadRedIronChest: DoodadType;

    // Yellow
    @Register.item("YellowIronChest", {
        use: [ActionType.Build],
        weightRange: [15,20],
        weight: 15,
        onUse: { [ActionType.Build] : Registry<ColorChests>().get('doodadYellowIronChest')},
        recipe: {
			components: [
                ...IronChestBase,
				RecipeComponent(Registry<ColorChests>().get("itemYellowPigments"),1,1),
			],
			...BaseStatsItemIronChest
		},
        doodadContainer: Registry<ColorChests>().get('doodadYellowIronChest'),
        placeDownType: Registry<ColorChests>().get('doodadYellowIronChest'),
        groups: [ItemTypeGroup.Storage]
    })
    public itemYellowIronChest: ItemType;

    @Register.doodad("YellowIronChest", {
        ...BaseStatsDoodadIronChest,
        pickUp: [Registry<ColorChests>().get('itemYellowIronChest')]
    })
    public doodadYellowIronChest: DoodadType;

    // Green
    @Register.item("GreenIronChest", {
        use: [ActionType.Build],
        weightRange: [15,20],
        weight: 15,
        onUse: { [ActionType.Build] : Registry<ColorChests>().get('doodadGreenIronChest')},
        recipe: {
			components: [
                ...IronChestBase,
				RecipeComponent(Registry<ColorChests>().get("itemGreenPigments"),1,1),
			],
			...BaseStatsItemIronChest
		},
        doodadContainer: Registry<ColorChests>().get('doodadGreenIronChest'),
        placeDownType: Registry<ColorChests>().get('doodadGreenIronChest'),
        groups: [ItemTypeGroup.Storage]
    })
    public itemGreenIronChest: ItemType;

    @Register.doodad("GreenIronChest", {
        ...BaseStatsDoodadIronChest,
        pickUp: [Registry<ColorChests>().get('itemGreenIronChest')]
    })
    public doodadGreenIronChest: DoodadType;

    // Orange
    @Register.item("OrangeIronChest", {
        use: [ActionType.Build],
        weightRange: [15,20],
        weight: 15,
        onUse: { [ActionType.Build] : Registry<ColorChests>().get('doodadOrangeIronChest')},
        recipe: {
			components: [
                ...IronChestBase,
				RecipeComponent(Registry<ColorChests>().get("itemOrangePigments"),1,1),
			],
			...BaseStatsItemIronChest
		},
        doodadContainer: Registry<ColorChests>().get('doodadOrangeIronChest'),
        placeDownType: Registry<ColorChests>().get('doodadOrangeIronChest'),
        groups: [ItemTypeGroup.Storage]
    })
    public itemOrangeIronChest: ItemType;

    @Register.doodad("OrangeIronChest", {
        ...BaseStatsDoodadIronChest,
        pickUp: [Registry<ColorChests>().get('itemOrangeIronChest')]
    })
    public doodadOrangeIronChest: DoodadType;

    // Purple
    @Register.item("PurpleIronChest", {
        use: [ActionType.Build],
        weightRange: [15,20],
        weight: 15,
        onUse: { [ActionType.Build] : Registry<ColorChests>().get('doodadPurpleIronChest')},
        recipe: {
			components: [
                ...IronChestBase,
				RecipeComponent(Registry<ColorChests>().get("itemPurplePigments"),1,1),
			],
			...BaseStatsItemIronChest
		},
        doodadContainer: Registry<ColorChests>().get('doodadPurpleIronChest'),
        placeDownType: Registry<ColorChests>().get('doodadPurpleIronChest'),
        groups: [ItemTypeGroup.Storage]
    })
    public itemPurpleIronChest: ItemType;

    @Register.doodad("PurpleIronChest", {
        ...BaseStatsDoodadIronChest,
        pickUp: [Registry<ColorChests>().get('itemPurpleIronChest')]
    })
    public doodadPurpleIronChest: DoodadType;


    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Pigment Groups ( Black, White, Red, Yellow, Green, Orange, Purple )
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    @Register.itemGroup("BlackPigments", { 
        default: ItemType.Charcoal,
        types: [
            ItemType.Charcoal,
            ItemType.PileOfAsh,
            ItemType.CarbonPowder,
            ItemType.Coal
        ],
    })
    public itemBlackPigments: ItemTypeGroup;

    @Register.itemGroup("WhitePigments", { 
        default: ItemType.BoneMeal,
        types: [
            ItemType.BoneMeal,
            ItemType.TalcumPowder,
            ItemType.LimestonePowder,
            ItemType.Chives
        ],
    })
    public itemWhitePigments: ItemTypeGroup;

    @Register.itemGroup("RedPigments", { 
        default: ItemType.Raspberries,
        types: [
            ItemType.Tomato,
            ItemType.Apple,
            ItemType.FlyAmanita,
            ItemType.Offal,
            ItemType.Raspberries
        ],
    })
    public itemRedPigments: ItemTypeGroup;

    @Register.itemGroup("YellowPigments", { 
        default: ItemType.ArcticPoppies,
        types: [
            ItemType.CornEar,
            ItemType.ArcticPoppies,
            ItemType.Beggarticks,
            ItemType.CopalResin
        ],
    })
    public itemYellowPigments: ItemTypeGroup;

    // Will add in when there is an item with blue to be used
    /* @Register.itemGroup("BluePigments", { 
        default: 
        types: [
            
        ],
    })
    public itemBluePigments: ItemTypeGroup; */

    @Register.itemGroup("GreenPigments", { 
        default: ItemType.Leaves,
        types: [
            ItemType.SpruceNeedles,
            ItemType.PalmLeaf,
            ItemType.PoisonIvyLeaves,
            ItemType.Leaves,
            ItemType.AloeVeraLeaves,
            ItemType.Badderlocks,
            ItemType.ArcticPoppies,
            ItemType.Beggarticks,
            ItemType.BladesOfGrass,
            ItemType.Carrot,
            ItemType.Chives,
            ItemType.CornEar,
            ItemType.MilkThistleFlowers,
            ItemType.Pumpkin
        ],
    })
    public itemGreenPigments: ItemTypeGroup;

    @Register.itemGroup("OrangePigments", { 
        default: ItemType.Carrot,
        types: [
            ItemType.Carrot,
            ItemType.Pumpkin
        ],
    })
    public itemOrangePigments: ItemTypeGroup;

    @Register.itemGroup("PurplePigments", { 
        default: ItemType.MilkThistleFlowers,
        types: [
            ItemType.MilkThistleFlowers
        ],
    })
    public itemPurplePigments: ItemTypeGroup;

}